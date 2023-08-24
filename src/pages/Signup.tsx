import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import SignForm from '../components/common/Sign/SignForm'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signup({ setIsAuth }: Props) {
  const navigate = useNavigate()

  return (
    <div>
      <SignForm isSignUp={true} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signup
