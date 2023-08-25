import SignForm from '../components/common/Sign/SignForm'
import { StyledSignFormContainer } from '../components/common/Sign/SignForm.styled'

function SigninPage() {
  return (
    <div>
      <StyledSignFormContainer>
        <SignForm.Title title="로그인" />
        <SignForm.Form mode="signin">
          <SignForm.Id />
          <SignForm.Password />
          <SignForm.ButtonGroup mode="signin" />
        </SignForm.Form>
      </StyledSignFormContainer>
    </div>
  )
}

export default SigninPage
