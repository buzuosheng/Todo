import { Dispatch } from 'react'
import { Todo, IAction } from './reducer'

interface ITodoListItem {
  todo: Todo
  dispatch: Dispatch<IAction>
}

const ListItem: React.FC<ITodoListItem> = ({
  todo: { id, value, completed },
  dispatch
}: ITodoListItem) => {
  return (
    <div className="h-12 flex flex-row justify-start items-center flex-nowrap py-4 px-12 bg-gray-50 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: 'TOGGLE', payload: id })}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <div
        className={`appearance-none text-left text-xl font-medium w-96
        ${completed ? 'line-through ' : ''}
        ${completed ? 'text-gray-400 ' : 'text-gray-500'}
        `}
      >
        {value}
      </div>
      <button
        className="ml-8 text-xl"
        onClick={() => dispatch({ type: 'DELETE', payload: id })}
      >
        ×
      </button>
    </div>
  )
}

export default ListItem
