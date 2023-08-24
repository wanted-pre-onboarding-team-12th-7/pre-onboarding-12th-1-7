import SignForm from '../components/common/Sign/SignForm'
import { SignProps } from '../components/common/Sign/types'

function Signup({ setToken }: SignProps) {
  return (
    <div>
      <SignForm isSignUp={true} setToken={setToken} />
    </div>
  )
}

export default Signup
