import SignForm from '../components/common/Sign/SignForm'

interface SignupProps {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signup({ setIsAuth }: SignupProps) {
  return (
    <div>
      <SignForm isSignUp={true} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signup
