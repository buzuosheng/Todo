import type { NextPage } from 'next'
import Link from 'next/link'
import List from '../components/usereducer-example/List'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl text-green-300">
      <Link href="/react">
        <a className="mt-8">react Example</a>
      </Link>
      <Link href="/usereducer">
        <a className="mt-8">useReducer Example</a>
      </Link>
      {/* <Link href="/redux">
        <a className="mt-8">redux Example</a>
      </Link> */}
      <Link href="/toolkit">
        <a className="mt-8">Redux Toolkit Example</a>
      </Link>
      <Link href="/uselocalstorage">
        <a className="mt-8">use localStorage Example</a>
      </Link>
    </div>
  )
}

export default Home
