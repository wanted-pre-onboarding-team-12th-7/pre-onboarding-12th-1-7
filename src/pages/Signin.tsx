import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import SignForm from '../components/common/Sign/SignForm'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signin({ setIsAuth }: Props) {
  const navigate = useNavigate()

  return (
    <div>
      <SignForm isSignUp={false} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signin
