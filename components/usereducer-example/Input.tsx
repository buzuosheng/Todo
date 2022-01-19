import React, { Dispatch, useState } from 'react'
import { Todo, IAction } from './reducer'

interface IProps {
  todoList: Todo[]
  dispatch: Dispatch<IAction>
}

const Input: React.FC<IProps> = ({ todoList, dispatch }) => {
  const [completeAll, setCompleteAll] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div className="flex flex-row items-center py-4 px-12 border-b">
      <input
        type="checkbox"
        checked={completeAll}
        onChange={() => {
          setCompleteAll(!completeAll)
          dispatch({ type: 'TALL', payload: completeAll })
        }}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <input
        placeholder="what needs you be done"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none py-1 px-2 w-96 rounded-md text-gray-700"
      />
      <button
        onClick={() => {
          if (!value) return
          dispatch({ type: 'ADD', payload: value as string })
          setValue('')
        }}
        className="text-gray-700 bg-green-400 font-semibold w-24 h-8 ml-4 sm:mr-8 shadow-md border rounded-lg active:bg-gray-100 focus:outline-none"
      >
        Add
      </button>
    </div>
  )
}

export default Input
