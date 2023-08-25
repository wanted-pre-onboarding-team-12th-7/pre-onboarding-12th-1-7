import SignForm from '../components/common/Sign/SignForm'
import { StyledSignFormContainer } from '../components/common/Sign/SignForm.styled'

function SignupPage() {
  return (
    <div>
      <StyledSignFormContainer>
        <SignForm.Title title="회원가입" />
        <SignForm.Form mode="signup">
          <SignForm.Id />
          <SignForm.Password />
          <SignForm.ButtonGroup mode="signup" />
        </SignForm.Form>
      </StyledSignFormContainer>
    </div>
  )
}

export default SignupPage
