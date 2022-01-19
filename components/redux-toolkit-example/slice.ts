import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import Item from '../react-example/Item'

export interface Item {
  id: string
  value: string
  completed: boolean
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [] as Item[],
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({ id: nanoid(), value: action.payload, completed: false })
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload)
    },
    toggleAll: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        return state.map((item) => ({ ...item, completed: false }))
      } else {
        return state.map((item) => ({ ...item, completed: true }))
      }
    },
    toggle: (state, action: PayloadAction<string>) => {
      return state.map((item) => {
        if (item.id === action.payload)
          return { ...item, completed: !item.completed }
        return item
      })
    },
    clearCompleted: (state) => {
      return state.filter((item) => item.completed === false)
    }
  }
})

export const { addTodo, removeTodo, toggleAll, toggle, clearCompleted } =
  todoSlice.actions
export default todoSlice.reducer
