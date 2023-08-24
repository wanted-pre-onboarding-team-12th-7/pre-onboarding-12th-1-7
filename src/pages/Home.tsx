import { useNavigate } from 'react-router-dom'
import { css, styled } from 'styled-components'
import { PageWrapper } from './PageLayout'

function Home() {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      안녕하세요, 7팀의 투두리스트 프로젝트에 오신 것을 환영합니다!
      <ButtonWrapper>
        <SignButton
          isSignin={false}
          onClick={() => {
            navigate('/signup')
          }}
        >
          회원가입
        </SignButton>
        <SignButton
          isSignin={true}
          onClick={() => {
            navigate('/signin')
          }}
        >
          로그인
        </SignButton>
        <SignButton
          isSignin={true}
          onClick={() => {
            navigate('/todo')
          }}
        >
          투두리스트 구경하러 가기
        </SignButton>
      </ButtonWrapper>
    </PageWrapper>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`

const SignButton = styled.button<{ isSignin: boolean }>`
  width: 100%;
  height: 32px;
  max-width: 425px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;

  ${({ isSignin }) => css`
    background-color: ${isSignin ? 'black' : 'white'};
    color: ${isSignin ? 'white' : 'black'};
  `}
`

export default Home
