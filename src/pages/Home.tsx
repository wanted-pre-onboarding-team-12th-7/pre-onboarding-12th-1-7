import { useNavigate } from 'react-router-dom'
import { css, styled } from 'styled-components'

function Home() {
  const navigate = useNavigate()

  return (
    <StyledHome>
      소개글~
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
          투두 테스트 버튼
        </SignButton>
      </ButtonWrapper>
    </StyledHome>
  )
}

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: 100vh;
`

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

  cursor: pointer;

  border: 1px solid gray;
  border-radius: 5px;

  ${({ isSignin }) => css`
    background-color: ${isSignin ? 'black' : 'white'};
    color: ${isSignin ? 'white' : 'black'};
  `}
`

export default Home
