import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { StyledSignFormContainer, StyledSignFormTitle, StyledSignFormBox } from './SignForm.styled'
import { postSignUp, postSignin } from '../../../apis/auth'

type Props = {
  isSignUp: boolean
}

function SignForm({ isSignUp }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)
  const navigate = useNavigate()

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setEmail(value)
    setIsValidEmail(value.indexOf('@') !== -1)
  }

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setPassword(value)
    setIsValidPassword(value.length >= 8)
  }

  const sendData = () => {
    const data = {
      email: email,
      password: password,
    }
    if (isSignUp) {
      postSignUp(data.email, data.password)
        .then(() => {
          navigate('/signin')
        })
        .catch((err) => {
          const message = err.response.data.message
          alert(message)
          console.log(err)
        })
    }

    if (!isSignUp) {
      postSignin(data.email, data.password)
        .then((res) => {
          localStorage.setItem('access_token', res.data.access_token)
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
      <StyledSignFormBox>
        <input
          data-testid="email-input"
          type="email"
          placeholder="이메일 주소"
          onChange={onChangeEmail}
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="비밀번호 (8자리 이상)"
          onChange={onChangePassword}
        />
        <Link to={isSignUp ? '/signin' : '/signup'}>
          {isSignUp ? '로그인 페이지로' : '회원가입 페이지로'}
        </Link>

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
