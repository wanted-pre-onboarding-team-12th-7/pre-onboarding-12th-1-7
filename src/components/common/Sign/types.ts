export interface SignFormProps {
  isSignUp: boolean
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export interface SignProps {
  setToken: React.Dispatch<React.SetStateAction<string>>
}

export interface SigninResponse {
  data: {
    access_token: string
  }
}
