import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <StyledNotFound>
      <StyledNumber>404</StyledNumber>
      <StyledTitle>페이지를 찾을 수 없습니다.</StyledTitle>
      <StyledComment>페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.</StyledComment>
      <StyledButton
        onClick={() => {
          navigate('/')
        }}
      >
        홈으로 돌아가기
      </StyledButton>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100vh;
`

const StyledNumber = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxLarge};
`

const StyledTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
`

const StyledComment = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
`

const StyledButton = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border: 0.5px solid black;
  border-radius: 10px;
  cursor: pointer;
`

export default NotFoundPage
