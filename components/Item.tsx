import { TodoItem } from './interface'

const Item: React.FC<TodoItem> = ({
  id,
  list,
  setCompleted,
  text,
  done,
  del
}) => {
  const toggle = ()=>{
    let temp = Array.from(list)
    temp[id].done = !temp[id].done
    setCompleted(temp)
  }

  const delTodo = () => {
    let temp = Array.from(list)
    temp.splice(id,1)
    del(temp)
  }

  return (
    <div className="h-12 flex flex-row justify-start items-center flex-nowrap py-4 px-12 bg-gray-50 border-b">
      <input
        type="checkbox"
        checked={done}
        onChange={()=> toggle()}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <div
        className={`appearance-none text-left text-xl font-medium w-96
        ${done ? 'line-through ' : ''}
        ${done ? 'text-gray-400 ' : 'text-gray-500'}
        `}
      >
        {text.toString()}
      </div>
      <button className="ml-8 text-xl" onClick={() => delTodo()}>×</button>
    </div>
  )
}

export default Item
