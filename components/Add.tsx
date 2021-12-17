import { Add } from './interface'

const Add: React.FC<Add> = ({
  done,
  setDone,
  text,
  setText,
  submit,
  setSubmit,
}) => {
  return (
    <div className="flex flex-row items-center py-4 px-12 border-b">
      <input
        type="checkbox"
        checked={done}
        onChange={() => setDone(!done)}
        className="h-7 w-7 mr-4 border border-gray-300 rounded-full focus:outline-none appearance-none checked:bg-green-400 checked:border-transparent"
      />
      <input
        placeholder="what needs you be done"
        className="outline-none py-1 px-2 w-96 rounded-md text-gray-700"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setSubmit({ text, done })
          setText('')
        }}
        className="text-gray-700 bg-green-400 font-semibold w-24 h-8 ml-4 sm:mr-8 shadow-md border rounded-lg active:bg-gray-100 focus:outline-none"
      >
        Add
      </button>
    </div>
  )
}

export default Add
