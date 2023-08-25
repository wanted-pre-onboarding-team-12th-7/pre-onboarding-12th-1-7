import { useState, useEffect } from 'react'
import { styled } from 'styled-components'

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
    <TodoListWrapper>
      <TodoListHead>
        <StyledLabel htmlFor="addTodo">
          <StyledInput
            id="addTodo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            data-testid="new-todo-input"
          />
        </StyledLabel>
        <StyledButton
          onClick={() => createTodo(newTodo)}
          type="button"
          data-testid="new-todo-add-button"
        >
          추가
        </StyledButton>
      </TodoListHead>
      <TodoListBody>
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
      </TodoListBody>
    </TodoListWrapper>
  )
}

export default TodoList

const TodoListWrapper = styled.div`
  width: 100%;
`

const TodoListHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`
const TodoListBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`

const StyledLabel = styled.label`
  flex-grow: 1;
`

const StyledInput = styled.input`
  border-radius: 12px;
  padding: 8px 8px;
  margin-right: 12px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gray};
`
const StyledButton = styled.button`
  border-radius: 12px;
  padding: 8px 8px;

  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`
const FlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 10px;
`
