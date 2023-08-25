import { useEffect } from 'react'
import { PropsWithChildren, createContext, useContext, useState } from 'react'
import { AxiosError } from 'axios'
import { TodoType } from './types'
import {
  createTodoRequest,
  getTodosRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from '../../apis/todo'

interface TodoContextType {
  todos: TodoType[]
  createTodo: (todo: string) => void
  getTodo: () => void
  updateTodo: (id: number, todo: string, isCompleted: boolean) => void
  deleteTodo: (id: number) => void
}

const TodoContext = createContext<TodoContextType | null>(null)

function TodoList({ children }: PropsWithChildren) {
  const [todos, setTodos] = useState<TodoType[]>([])

  const createTodo = (todo: string) => {
    createTodoRequest(todo)
      .then((createdTodo) => {
        setTodos((prevTodos) => [...prevTodos, createdTodo])
      })
      .catch((e: AxiosError) => alert(e))
  }

  const getTodo = () => {
    getTodosRequest()
      .then((todos) => setTodos(todos))
      .catch((e: AxiosError) => alert(e.message))
  }

  const updateTodo = (id: number, todo: string, isCompleted: boolean) => {
    updateTodoRequest(id, todo, isCompleted)
      .then((updatedTodo) =>
        setTodos((prevTodos) =>
          prevTodos.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
        )
      )
      .catch((e: AxiosError) => alert(e.message))
  }

  const deleteTodo = (id: number) => {
    deleteTodoRequest(id)
      .then(() => setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id)))
      .catch((e: AxiosError) => alert(e.message))
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <TodoContext.Provider value={{ todos, createTodo, getTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoList

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (context === null) {
    throw new Error('Context is null!')
  }
  return context
}
