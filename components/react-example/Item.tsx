import { TodoItem } from './interface'

const Item: React.FC<TodoItem> = ({ list, setCompleted, todo, del }) => {
  const toggle = () => {
    setCompleted(
      list.map((item) => {
        if (item.id === todo.id) {
          item.done = !todo.done
        }
        return item
      })
    )
  }

  return (
    <div className="h-12 flex flex-row justify-start items-center flex-nowrap py-4 px-12 bg-gray-50 border-b">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={toggle}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <div
        className={`appearance-none text-left text-xl font-medium w-96
        ${todo.done ? 'line-through ' : ''}
        ${todo.done ? 'text-gray-400 ' : 'text-gray-500'}
        `}
      >
        {todo.text.toString()}
      </div>
      <button
        className="ml-8 text-xl"
        onClick={() => del(list.filter((x) => x.id === todo.id))}
      >
        ×
      </button>
    </div>
  )
}

export default Item
