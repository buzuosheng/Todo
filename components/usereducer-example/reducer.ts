import { nanoid } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  value: string
  completed: boolean
}

let Action: 'ADD' | 'DELETE' | 'CLEAR' | 'TOGGLE' | 'TALL'

export interface IAction {
  type: typeof Action
  payload?: string | boolean
}

const initState: Todo[] = []

export const reducer = (state: Todo[] = initState, action: IAction): Todo[] => {
  const { type, payload } = action

  switch (type) {
    case 'ADD':
      return [
        ...state,
        { id: nanoid(), value: payload, completed: false } as Todo
      ]
    case 'DELETE':
      return state.filter((todo) => todo.id !== payload)
    case 'TOGGLE':
      let newState = JSON.parse(JSON.stringify(state))
      return newState.map((todo: Todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed
        }
        return todo
      })
    case 'CLEAR':
      return state.filter((todo) => todo.completed === false)
    case 'TALL':
      if (payload) {
        return state.map((todo: Todo) => ({ ...todo, completed: false }))
      } else {
        return state.map((todo: Todo) => ({ ...todo, completed: true }))
      }
    default:
      return state
  }
}
