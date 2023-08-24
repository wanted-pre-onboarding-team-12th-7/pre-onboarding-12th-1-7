import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { SignFormProps, SigninResponse } from './types'
import { StyledSignFormContainer, StyledSignFormTitle, StyledSignFormBox } from './SignForm.styled'
import { postSignup, postSignin } from '../../../apis/auth'

function SignForm({ isSignUp, setToken }: SignFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const navigate = useNavigate()

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValidEmail(/@/.test(value))
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setIsValidPassword(/.{8,}$/.test(value))
  }

  const sendData = () => {
    const data = {
      email: email,
      password: password,
    }
    if (isSignUp) {
      postSignup(data.email, data.password)
        .then(() => {
          alert('회원가입 완료!')
          navigate('/signin')
        })
        .catch((err) => {
          const message = err.response.data.message
          alert(message)
          console.log(err)
        })
    }

    if (isSignUp === false) {
      postSignin(data.email, data.password)
        .then((res: SigninResponse) => {
          localStorage.setItem('accessToken', res.data.access_token)
          setToken(res.data.access_token)
          navigate('/todo')
        })
        .catch((err) => {
          const message = err.response.data.message
          alert(message)
          console.log(err)
        })
    }
  }

  return (
    <StyledSignFormContainer>
      <StyledSignFormTitle>{isSignUp ? '회원가입' : '로그인'}</StyledSignFormTitle>
      <StyledSignFormBox noValidate>
        <input
          data-testid="email-input"
          type="email"
          placeholder="이메일 주소"
          onChange={onChangeEmail}
        />
        {isValidEmail === true ? (
          <p>사용가능한 이메일입니다.</p>
        ) : (
          <p>이메일에는 @가 들어가야합니다.</p>
        )}

        <input
          data-testid="password-input"
          type="password"
          placeholder="비밀번호 (8자리 이상)"
          onChange={onChangePassword}
          autoComplete="false"
        />
        {isValidPassword === true ? (
          <p>사용가능한 비밀번호입니다.</p>
        ) : (
          <p>비밀번호는 8자 이상으로 입력해주세요.</p>
        )}

        <Link to={isSignUp ? '/signin' : '/signup'}>
          {isSignUp ? '로그인 페이지로' : '회원가입 페이지로'}
        </Link>
        <Link to="/">홈으로</Link>

        <button
          data-testid={isSignUp ? 'signup-button' : 'signin-button'}
          disabled={!(isValidEmail && isValidPassword)}
          onClick={sendData}
        >
          {isSignUp ? '회원가입' : '로그인'}
        </button>
      </StyledSignFormBox>
    </StyledSignFormContainer>
  )
}

export default SignForm
