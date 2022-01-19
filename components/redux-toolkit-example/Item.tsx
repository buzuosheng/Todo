import { useDispatch } from 'react-redux'
import { removeTodo, toggle } from './slice'
import { Item } from './slice'

interface IItem {
  item: Item
}

const Item: React.FC<IItem> = ({ item: { id, completed, value } }) => {
  const dispatch = useDispatch()
  return (
    <div className="h-12 flex flex-row justify-start items-center flex-nowrap py-4 px-12 bg-gray-50 border-b">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggle(id))}
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
      <button className="ml-8 text-xl" onClick={() => dispatch(removeTodo(id))}>
        ×
      </button>
    </div>
  )
}

export default Item
