import SignForm from '../components/common/Sign/SignForm'
import { SignProps } from '../components/common/Sign/types'

function Signin({ setIsAuth }: SignProps) {
  return (
    <div>
      <SignForm isSignUp={false} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signin
