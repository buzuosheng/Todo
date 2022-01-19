export type ID = string

export interface Todo {
  id: ID
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
  completeAll: boolean
  setCompleteAll: (done: boolean) => void
  list: Todo[]
  setList: (list: Todo[]) => void
}

export interface TodoItem {
  list: Todo[]
  setCompleted: (list: Todo[]) => void
  todo: Todo
  del: (l: Todo[]) => void
}
