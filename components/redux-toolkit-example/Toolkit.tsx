import Input from './Input'
import Item from './Item'
import { RootState, store } from './store'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { clearCompleted } from './slice'

const Todo: React.FC = () => {
  const list = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col flex-nowrap w-1/2 bg-gray-50 rounded-2xl">
      <Input />
      <>
        {list.length > 0
          ? list.map((item) => <Item key={item.id} item={item} />)
          : ''}
      </>
      {list.length > 0 ? (
        <div className="flex flex-row content-between px-12 py-2">
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            all: <span className="text-green-400">{list.length}</span>
          </span>
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            completed:
            <span className="text-green-400">
              {list.filter((x) => x.completed === true).length}
            </span>
          </span>
          <button
            onClick={() => dispatch(clearCompleted())}
            className="text-gray-700 bg-green-400 font-semibold w-24 h-8 shadow-md border rounded-lg active:bg-green-600 focus:outline-none"
          >
            Clear
          </button>
        </div>
      ) : (
        <div className="text-center text-3xl text-gray-400 p-4">No Data</div>
      )}
    </div>
  )
}

const TodoList = (
  <Provider store={store}>
    <div className="flex flex-col items-center pt-16">
      <Todo />
    </div>
  </Provider>
)

export default TodoList
