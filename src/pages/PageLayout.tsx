import styled from 'styled-components'

export const PageWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 100%;
  padding: 50px;
`
