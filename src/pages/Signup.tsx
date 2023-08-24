import SignForm from '../components/common/Sign/SignForm'
import { SignProps } from '../components/common/Sign/types'

function Signup({ setIsAuth }: SignProps) {
  return (
    <div>
      <SignForm isSignUp={true} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signup
