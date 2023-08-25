import { useState } from 'react'
import { styled } from 'styled-components'
import { useTodoContext } from '../../TodoProvider'

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

export default TodoListHead

const StyledTodoListHead = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-bottom: 24px;
  gap: 10px;
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
