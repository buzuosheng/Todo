import Add from './Add'
import Item from './Item'
import { useEffect, useState } from 'react'
import { Todo } from './interface'

const Todo: React.FC = () => {
  const [all, setAll] = useState(false)
  const [list, setList] = useState([] as Todo[])

  useEffect(() => {
    if (all == false) {
      setList(list.map((x) => ({ ...x, done: false })))
    } else {
      setList(list.map((x) => ({ ...x, done: true })))
    }
  }, [all])

  return (
    <div className="flex flex-col flex-nowrap w-1/2 bg-gray-50 rounded-2xl">
      <Add
        list={list}
        setList={setList}
        completeAll={all}
        setCompleteAll={setAll}
      />
      <>
        {list.length > 0
          ? list.map((item) => (
              <Item
                key={item.id}
                todo={item}
                list={list}
                setCompleted={setList}
                del={setList}
              />
            ))
          : ''}
      </>
      {list.length > 0 ? (
        <div className="flex flex-row content-between px-12 py-2">
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            all: <span className="text-green-400">{list.length}</span>
          </span>
          <span className="text-left text-xl font-medium w-60 text-gray-400">
            completed:{' '}
            <span className="text-green-400">
              {list.filter((x) => x.done === true).length}
            </span>
          </span>
          <button
            onClick={() => setList(list.filter((x) => x.done === false))}
            className="text-gray-700 bg-green-400 font-semibold w-24 h-8 shadow-md border rounded-lg active:bg-gray-100 focus:outline-none"
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

export default Todo
