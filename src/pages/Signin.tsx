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
