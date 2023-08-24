import SignForm from '../components/common/Sign/SignForm'
import { SignProps } from '../components/common/Sign/types'

function Signin({ setToken }: SignProps) {
  return (
    <div>
      <SignForm isSignUp={false} setToken={setToken} />
    </div>
  )
}

export default Signin
