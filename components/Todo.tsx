import Add from './Add'
import Item from './Item'
import { useEffect, useState } from 'react'
import { Todo } from './interface'

const Todo: React.FC = () => {
  const [all, setAll] = useState(false)
  const [text, setText] = useState('')
  const [submit, setSubmit] = useState({} as Todo)
  const [list, setList] = useState([] as Todo[])
  const add = (item: Todo) => {
    list.push(item)
  }
  useEffect(() => {
    if (submit.text?.length > 0) {
      setList([...list, submit])
    }
  }, [submit.text])

  useEffect(() => {
    if (all == false) {
      setList(list.map((x) => Object.assign(x, { done: false })))
    } else {
      setList(list.map((x) => Object.assign(x, { done: true })))
    }
  }, [all])

  return (
    <div className="flex flex-col flex-nowrap w-1/2 bg-gray-50 rounded-2xl">
      <Add
        done={all}
        setDone={setAll}
        text={text}
        setText={setText}
        submit={submit}
        setSubmit={setSubmit}
        add={add}
      />
      <>
        {list.length > 0
          ? list.map((item, index) => (
              <Item
                key={index}
                id={index}
                text={item.text}
                done={item.done}
                list={list}
                setCompleted={setList}
                del={setList}
              />
            ))
          : ''}
      </>
      {list.length > 0 ? (
        <div className="flex flex-row content-between px-12 py-2">
          <span className="text-left text-xl font-medium w-96 text-gray-400">
            all: <span className="text-green-400">{list.length}</span>
          </span>
          <span className="text-left text-xl font-medium w-96 text-gray-400">
            completed:{' '}
            <span className="text-green-400">
              {list.filter((x) => x.done === true).length}
            </span>
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Todo
