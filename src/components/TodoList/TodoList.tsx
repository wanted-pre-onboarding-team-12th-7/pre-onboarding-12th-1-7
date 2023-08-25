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
import {
  FlexUl,
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledTodoListBody,
  StyledTodoListHead,
} from './TodoList.styled'
import TodoItem from '../TodoItem/TodoItem'

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

function TodoListHead() {
  const [newTodo, setNewTodo] = useState('')
  const { createTodo } = useTodoContext()

  return (
    <StyledTodoListHead>
      <StyledLabel htmlFor="addTodo">
        <StyledInput
          id="addTodo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          data-testid="new-todo-input"
        />
      </StyledLabel>
      <StyledButton
        onClick={() => {
          createTodo(newTodo)
          setNewTodo('')
        }}
        type="button"
        data-testid="new-todo-add-button"
      >
        추가
      </StyledButton>
    </StyledTodoListHead>
  )
}

function TodoListBody() {
  const { todos, updateTodo, deleteTodo } = useTodoContext()

  return (
    <StyledTodoListBody>
      <FlexUl>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </FlexUl>
    </StyledTodoListBody>
  )
}

export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (context === null) {
    throw new Error('Context is null!')
  }
  return context
}

TodoList.Head = TodoListHead
TodoList.Body = TodoListBody
