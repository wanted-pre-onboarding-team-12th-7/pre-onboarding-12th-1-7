export interface SignFormProps {
  isSignUp: boolean
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export interface SignProps {
  setToken: React.Dispatch<React.SetStateAction<string | null>>
}

export interface SigninResponse {
  data: {
    access_token: string
  }
}
