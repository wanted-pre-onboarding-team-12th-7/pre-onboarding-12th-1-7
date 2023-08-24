import SignForm from '../components/common/Sign/SignForm'

interface SigninProps {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signin({ setIsAuth }: SigninProps) {
  return (
    <div>
      <SignForm isSignUp={false} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signin
