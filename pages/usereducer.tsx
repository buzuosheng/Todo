import Input from '../components/usereducer-example/Input'
import List from '../components/usereducer-example/List'
import { useReducer } from 'react'
import { reducer } from '../components/usereducer-example/reducer'

const initializer = () => JSON.parse('[]')

const ListApp: React.FC = () => {
  const [todoList, dispatch] = useReducer(reducer, undefined, initializer)
  return (
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col flex-nowrap w-1/2 bg-gray-50 rounded-2xl">
        <Input todoList={todoList} dispatch={dispatch} />
        <List todoList={todoList} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default ListApp
