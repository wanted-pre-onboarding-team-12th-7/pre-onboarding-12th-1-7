import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import SignForm from '../components/common/Sign/SignForm'

function Signin() {
  const navigate = useNavigate()

  return (
    <div>
      <SignForm isSignUp={false} />
      <SampleButton
        onClick={() => {
          navigate('/')
        }}
      >
        홈으로
      </SampleButton>
      <button
        onClick={() => {
          localStorage.setItem('access_token', '12340')
          navigate(0)
        }}
      >
        accessToken 추가
      </button>
    </div>
  )
}

const SampleButton = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: skyblue;
  cursor: pointer;
`

export default Signin
