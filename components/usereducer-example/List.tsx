import React, { FC, ReactElement, Dispatch } from 'react'
import ListItem from './ListItem'
import { Todo, IAction } from './reducer'

interface IProps {
  todoList: Todo[]
  dispatch: Dispatch<IAction>
}

const List: FC<IProps> = ({ todoList, dispatch }): ReactElement => {
  if (todoList.length) {
    return (
      <div>
        {todoList.length
          ? todoList.map((todo) => (
              <ListItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          : ''}
        <div className="flex flex-row content-between px-12 py-2">
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            all: <span className="text-green-400">{todoList.length}</span>
          </span>
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            completed:
            <span className="text-green-400">
              {todoList.filter((x) => x.completed === true).length}
            </span>
          </span>
          <button
            onClick={() => dispatch({ type: 'CLEAR' })}
            className="text-gray-700 bg-green-400 font-semibold w-24 h-8 shadow-md border rounded-lg active:bg-gray-100 focus:outline-none"
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
  return <div className="text-center text-9xl text-gray-400 p-4">No Data</div>
}

export default List
