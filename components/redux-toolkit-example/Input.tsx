import { useState } from 'react'
import { addTodo, toggleAll } from './slice'
import { useDispatch } from 'react-redux'

const Input: React.FC = () => {
  const [value, setValue] = useState('')
  const [all, setAll] = useState(false)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-row items-center py-4 px-12 border-b">
      <input
        type="checkbox"
        checked={all}
        onChange={() => {
          setAll(!all)
          dispatch(toggleAll(all))
        }}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="what needs you be done"
        className="outline-none py-1 px-2 w-96 rounded-md text-gray-700"
      />
      <button
        onClick={() => {
          if (value) {
            dispatch(addTodo(value))
            setValue('')
          }
        }}
        className="text-gray-700 bg-green-400 font-semibold w-24 h-8 ml-4 sm:mr-8 shadow-md border rounded-lg active:bg-green-600 focus:outline-none"
      >
        Add
      </button>
    </div>
  )
}

export default Input
