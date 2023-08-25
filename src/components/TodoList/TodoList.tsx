import { useEffect } from 'react'
import { styled } from 'styled-components'
import { useTodoContext } from '../../TodoProvider'

import TodoListHead from '../TodoListHead/TodoListHead'
import TodoListBody from '../TodoListBody/TodoListBody'

function TodoList() {
  const { getTodo } = useTodoContext()

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <TodoListWrapper>
      <TodoListHead />
      <TodoListBody />
    </TodoListWrapper>
  )
}

export default TodoList

const TodoListWrapper = styled.div`
  width: 100%;
`
