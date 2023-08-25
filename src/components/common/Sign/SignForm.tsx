import { Link } from 'react-router-dom'

import { SignFormProps } from './types'
import {
  StyledSignFormContainer,
  StyledSignFormTitle,
  StyledSignFormBox,
  StyledSignFormInput,
  StyledSignFormMsg,
  StyledSignFormLinkWrap,
  StyledSignFormButton,
} from './SignForm.styled'
import useForm from '../../../hooks/useForm'

function SignForm({ isSignUp }: SignFormProps) {
  const { onChangeEmail, onChangePassword, sendData, isValidEmail, isValidPassword } = useForm({
    isSignUp,
  })

  return (
    <StyledSignFormContainer>
      <StyledSignFormTitle>{isSignUp ? '회원가입' : '로그인'}</StyledSignFormTitle>
      <StyledSignFormBox noValidate>
        <StyledSignFormInput
          data-testid="email-input"
          type="email"
          placeholder="이메일 주소"
          onChange={onChangeEmail}
        />
        {isValidEmail === true ? (
          <StyledSignFormMsg className="pass">사용가능한 이메일입니다.</StyledSignFormMsg>
        ) : (
          <StyledSignFormMsg>이메일에는 @가 들어가야합니다.</StyledSignFormMsg>
        )}

        <StyledSignFormInput
          data-testid="password-input"
          type="password"
          placeholder="비밀번호 (8자리 이상)"
          onChange={onChangePassword}
          autoComplete="false"
        />
        {isValidPassword === true ? (
          <StyledSignFormMsg className="pass">사용가능한 비밀번호입니다.</StyledSignFormMsg>
        ) : (
          <StyledSignFormMsg>비밀번호는 8자 이상으로 입력해주세요.</StyledSignFormMsg>
        )}

        <StyledSignFormButton
          data-testid={isSignUp ? 'signup-button' : 'signin-button'}
          disabled={!(isValidEmail && isValidPassword)}
          onClick={sendData}
          type="button"
        >
          {isSignUp ? '회원가입' : '로그인'}
        </StyledSignFormButton>

        <StyledSignFormLinkWrap>
          <Link to={isSignUp ? '/signin' : '/signup'}>
            {isSignUp ? '로그인 페이지로' : '회원가입 페이지로'}
          </Link>
          <Link to="/">홈으로</Link>
        </StyledSignFormLinkWrap>
      </StyledSignFormBox>
    </StyledSignFormContainer>
  )
}

export default SignForm
