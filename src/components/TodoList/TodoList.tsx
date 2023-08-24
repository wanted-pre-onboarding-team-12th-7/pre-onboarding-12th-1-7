import { useState, useEffect } from 'react'

import TodoItem from '../TodoItem/TodoItem'
import { TodoType } from './types'
import {
  createTodoRequest,
  getTodosRequest,
  updateTodoRequest,
  deleteTodoRequest,
} from '../../apis/todo'
import { AxiosError } from 'axios'

function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([])
  const [newTodo, setNewTodo] = useState('')

  const createTodo = (todo: string) => {
    createTodoRequest(todo)
      .then((createdTodo) => {
        setTodos((prevTodos) => [...prevTodos, createdTodo])
        setNewTodo('')
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
    <div>
      <div>
        <label htmlFor="addTodo">
          <input
            id="addTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            data-testid="new-todo-input"
          />
        </label>
        <button onClick={() => createTodo(newTodo)} type="button" data-testid="new-todo-add-button">
          추가
        </button>
      </div>
      <ul>
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
      </ul>
    </div>
  )
}

export default TodoList
