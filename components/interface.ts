export type ID = string

export interface Todo {
  text: string
  done: boolean
}

export interface Actions {
  type: 'add' | 'remove' | 'toggle' | 'all' | 'none'
}

// export enum Actions {
//   ADD_TODO = "ADD_TODO",
//   REMOVE_TODO = "REMOVE_TODO",
//   TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS",
// }

export interface Add {
  done: boolean
  setDone: (done: boolean) => void
  text: string
  setText: (v: string) => void
  submit: Todo
  setSubmit: (item: Todo) => void
  add: (item: Todo) => void
}

export interface TodoItem {
  list: Todo[]
  setCompleted: (list: Todo[]) => void
  text: string
  done: boolean
  id: number
  del: (l: Todo[]) => void
}
