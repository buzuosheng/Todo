import { Add } from './interface'
import { v1 as UUIDV1 } from 'uuid'
import { useRef } from 'react'

const Add: React.FC<Add> = ({ completeAll, setCompleteAll, list, setList }) => {
  const input = useRef<HTMLInputElement>(null)

  return (
    <div className="flex flex-row items-center py-4 px-12 border-b">
      <input
        type="checkbox"
        checked={completeAll}
        onChange={() => setCompleteAll(!completeAll)}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <input
        placeholder="what needs you be done"
        className="outline-none py-1 px-2 w-96 rounded-md text-gray-700"
        ref={input}
      />
      <button
        onClick={() => {
          if (input!.current!.value) {
            setList([
              ...list,
              { id: UUIDV1(), text: input!.current!.value, done: false }
            ])
            input!.current!.value = ''
          }
        }}
        className="text-gray-700 bg-green-400 font-semibold w-24 h-8 ml-4 sm:mr-8 shadow-md border rounded-lg active:bg-gray-100 focus:outline-none"
      >
        Add
      </button>
    </div>
  )
}

export default Add
