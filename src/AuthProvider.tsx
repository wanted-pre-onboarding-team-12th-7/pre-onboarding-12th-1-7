import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { TOKEN_KEY_STR } from './apis/instance'

type TokenActionType = 'sign-in' | 'sign-out'

interface AuthContextType {
  token: string | null
  updateAuth: (param: SigninType | SignoutType) => void
}

interface AuthActionType {
  action: TokenActionType
}

interface SigninType extends AuthActionType {
  tokenValue: string
}

type SignoutType = AuthActionType

const AuthContext = createContext<AuthContextType | null>(null)

function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(null)

  const updateAuth = (param: SigninType | SignoutType) => {
    if (param.action === 'sign-in') {
      localStorage.setItem(TOKEN_KEY_STR, (param as SigninType).tokenValue)
      setToken((param as SigninType).tokenValue)
      return
    }
    if (param.action === 'sign-out') {
      localStorage.removeItem(TOKEN_KEY_STR)
      setToken(() => null)
      return
    }
  }

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY_STR)
    if (token !== null) setToken(token)
  }, [])

  return <AuthContext.Provider value={{ token, updateAuth }}>{children}</AuthContext.Provider>
}

export default AuthProvider

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('Context is null!')
  }
  return context
}
