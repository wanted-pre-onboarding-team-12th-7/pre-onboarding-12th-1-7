import { useState } from 'react'
import { TodoItemProps } from './types'
import styled from 'styled-components'

function TodoItem({ id, todo, isCompleted, updateTodo, deleteTodo }: TodoItemProps) {
  const [todoCheck, setTodoCheck] = useState(isCompleted)
  const [todoModify, setTodoModify] = useState('')
  const [isEditMode, setIsEditMode] = useState(false)

  // TODO의 체크박스가 변경 되었을 때
  const onTodoCheckChanged = () => {
    updateTodo(id, todo, !todoCheck)
    setTodoCheck(!todoCheck)
  }

  // TODO input창의 값이 변경 되었을 때 (수정모드)
  const onTodoModifyChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const modifiedValue = e.target.value
    setTodoModify(modifiedValue)
  }

  // 수정 버튼을 눌렀을 때
  const onEditButtonClicked = () => {
    setTodoModify(todo)
    setIsEditMode(true)
  }

  // 취소 버튼을 눌렀을 때
  const onCancelButtonClicked = () => {
    setIsEditMode(false)
  }

  // 제출 버튼을 눌렀을 때
  const onSubmitButtonClicked = () => {
    updateTodo(id, todoModify, isCompleted)
    setIsEditMode(false)
  }

  // 삭제 버튼을 눌렀을 때
  const onDeleteButtonClicked = () => {
    deleteTodo(id)
  }

  return (
    <Li>
      <CheckboxSpanWrapper>
        <StyledLabel>
          <StyledCheckbox type="checkbox" checked={todoCheck} onChange={onTodoCheckChanged} />
          {isEditMode ? (
            <input
              data-testid="modify-input"
              type="text"
              onChange={onTodoModifyChanged}
              value={todoModify}
            />
          ) : (
            <StyledSpan>{todo}</StyledSpan>
          )}
        </StyledLabel>
      </CheckboxSpanWrapper>
      {isEditMode ? (
        <ButtonWrapper>
          <StyledButton data-testid="submit-button" onClick={onSubmitButtonClicked}>
            제출
          </StyledButton>
          <StyledButton data-testid="cancel-button" onClick={onCancelButtonClicked}>
            취소
          </StyledButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <StyledButton data-testid="modify-button" onClick={onEditButtonClicked}>
            수정
          </StyledButton>
          <StyledButton data-testid="delete-button" onClick={onDeleteButtonClicked}>
            삭제
          </StyledButton>
        </ButtonWrapper>
      )}
    </Li>
  )
}

export default TodoItem

const StyledLabel = styled.label`
  display: flex;
`

const StyledCheckbox = styled.input`
  margin-right: 10px;
`

const Li = styled.li`
  display: flex;
  padding: 10px;
  gap: 5%;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`
const CheckboxSpanWrapper = styled.div`
  max-width: 50%;
  flex: 1;
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    flex-shrink: 0;
  }
`
const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.small};
  padding: 2px 4px;
  border-radius: 2px;
`

const StyledSpan = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  width: 100%;
  height: 20px;
`
