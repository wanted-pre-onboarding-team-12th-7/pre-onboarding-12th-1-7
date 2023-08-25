import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SigninResponse } from '../components/common/Sign/types'
import { postSignin, postSignup } from '../apis/auth'
import { useAuthContext } from '../AuthProvider'

export type FormModeType = 'signin' | 'signup'

const useForm = (mode: FormModeType) => {
  const navigate = useNavigate()
  const { updateAuth } = useAuthContext()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(false)

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

    if (mode === 'signup') {
      postSignup(data.email, data.password)
        .then(() => {
          alert('회원가입 완료!')
          navigate('/signin')
        })
        .catch((err) => {
          const message = err.response.data.message
          alert(message)
          console.error(err)
        })
    } else {
      postSignin(data.email, data.password)
        .then((res: SigninResponse) => {
          updateAuth({ action: 'sign-in', tokenValue: res.data.access_token })
        })
        .catch((err) => {
          const message = err.response.data.message
          alert(message)
          console.error(err)
        })
    }
  }
  return {
    onChangeEmail,
    onChangePassword,
    sendData,
    isValidEmail,
    isValidPassword,
  } as const
}

export default useForm
