import { Link } from 'react-router-dom'
import {
  StyledSignFormTitle,
  StyledSignFormBox,
  StyledSignFormInput,
  StyledSignFormMsg,
  StyledSignFormLinkWrap,
  StyledSignFormButton,
} from './SignForm.styled'
import useForm, { FormModeType } from '../../../hooks/useForm'
import { PropsWithChildren, createContext, useContext } from 'react'

interface SignFormContextType {
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
  sendData: () => void
  isValidEmail: boolean
  isValidPassword: boolean
}

const SignFormContext = createContext<SignFormContextType | null>(null)

interface SignForm extends PropsWithChildren {
  mode: FormModeType
}

export default function SignForm({ children, mode }: SignForm) {
  const formState = useForm(mode)
  return (
    <SignFormContext.Provider value={{ ...formState }}>
      <StyledSignFormBox noValidate>{children}</StyledSignFormBox>
    </SignFormContext.Provider>
  )
}

function SignFormTitle({ title }: { title: string }) {
  return <StyledSignFormTitle>{title}</StyledSignFormTitle>
}

function SignFormInputEmail() {
  const { onChangeEmail, isValidEmail } = useFormContext()
  return (
    <>
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
    </>
  )
}

function SignFormInputPassword() {
  const { onChangePassword, isValidPassword } = useFormContext()
  return (
    <>
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
    </>
  )
}

function SignFormButtonButtonGroup({ mode }: { mode: FormModeType }) {
  const { sendData, isValidEmail, isValidPassword } = useFormContext()
  return (
    <>
      <StyledSignFormButton
        data-testid={mode === 'signup' ? 'signup-button' : 'signin-button'}
        disabled={!(isValidEmail && isValidPassword)}
        onClick={sendData}
        type="button"
      >
        {mode === 'signup' ? '회원가입' : '로그인'}
      </StyledSignFormButton>
      <StyledSignFormLinkWrap>
        <Link to={mode === 'signup' ? '/signin' : '/signup'}>
          {mode === 'signup' ? '로그인 페이지로' : '회원가입 페이지로'}
        </Link>
        <Link to="/">홈으로</Link>
      </StyledSignFormLinkWrap>
    </>
  )
}

export const useFormContext = () => {
  const context = useContext(SignFormContext)
  if (context === null) {
    throw Error('FormContext is null!')
  }
  return context
}

SignForm.Title = SignFormTitle
SignForm.Form = SignForm
SignForm.Id = SignFormInputEmail
SignForm.Password = SignFormInputPassword
SignForm.ButtonGroup = SignFormButtonButtonGroup
