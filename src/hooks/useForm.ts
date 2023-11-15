import { useState } from 'react'
import { useAuthContext } from '../AuthProvider'
import { useNavigate } from 'react-router-dom'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export type FormModeType = 'signin' | 'signup'

const useForm = (mode: FormModeType) => {
  const { updateAuth } = useAuthContext()
  const navigate = useNavigate()
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

  const sendData = async () => {
    const data = {
      email: email,
      password: password,
    }

    if (mode === 'signup') {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          alert('회원가입 완료!')
          navigate('/signin')
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res: UserCredential) => {
          res.user.getIdToken().then((token) => {
            updateAuth({ action: 'sign-in', tokenValue: token })
          })
        })
        .catch((err) => {
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
