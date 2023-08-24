import SignForm from '../components/common/Sign/SignForm'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signup({ setIsAuth }: Props) {
  return (
    <div>
      <SignForm isSignUp={true} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signup
