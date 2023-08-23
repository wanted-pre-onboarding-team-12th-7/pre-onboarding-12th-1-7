import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

function Signin() {
  const navigate = useNavigate()

  return (
    <div>
      로그인 페이지입니다
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
