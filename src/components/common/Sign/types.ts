export interface SignFormProps {
  isSignUp: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

export interface SignProps {
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

export interface SigninResponse {
  data: {
    access_token: string
  }
}
