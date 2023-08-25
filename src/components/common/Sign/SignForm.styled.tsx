import styled, { css } from 'styled-components'

export const StyledSignFormContainer = styled.div`
  width: calc(100% - 40px);
  max-width: 500px;
  padding-top: 100px;
  margin: 0 auto;
`

export const StyledSignFormTitle = styled.div`
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
`

export const StyledSignFormBox = styled.form`
  display: block;
`

export const StyledSignFormInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 20px 0 0;
  padding: 0 10px;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightgray};
  `}
`
export const StyledSignFormMsg = styled.p`
  font-size: 13px;
  padding: 0;
  margin: 10px 0 0;

  ${({ theme }) => css`
    color: ${theme.colors.red};

    &.pass {
      color: ${theme.colors.blue};
    }
  `}
`
export const StyledSignFormButton = styled.button`
  display: block;
  margin-top: 30px;
  width: 100%;
  height: 40px;
  border: 0;
  font-size: 16px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.blue};

    &:disabled {
      background-color: ${theme.colors.gray};
    }
  `}
`

export const StyledSignFormLinkWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  a {
    display: block;
    margin: 0 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`
