import SignForm from '../components/common/Sign/SignForm'

type Props = {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

function Signin({ setIsAuth }: Props) {
  return (
    <div>
      <SignForm isSignUp={false} setIsAuth={setIsAuth} />
    </div>
  )
}

export default Signin
