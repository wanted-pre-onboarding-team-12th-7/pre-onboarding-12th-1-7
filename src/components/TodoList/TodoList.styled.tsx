import styled from 'styled-components'

export const StyledTodoListHead = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  margin-bottom: 24px;
  gap: 10px;
`

export const StyledLabel = styled.label`
  flex-grow: 1;
`

export const StyledInput = styled.input`
  border-radius: 12px;
  padding: 8px 8px;
  margin-right: 12px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`
export const StyledButton = styled.button`
  border-radius: 12px;
  padding: 8px 8px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`

export const StyledTodoListBody = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  overflow-y: auto;
`

export const FlexUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`
