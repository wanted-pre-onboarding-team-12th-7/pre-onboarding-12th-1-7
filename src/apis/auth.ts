import { Instance } from './instance'

export const postSignup = async (email: string, password: string) => {
  try {
    return await Instance.post('/auth/signup', { email, password })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const postSignin = async (email: string, password: string) => {
  try {
    return await Instance.post(`/auth/signin`, { email, password })
  } catch (err) {
    console.error(err)
    throw err
  }
}
