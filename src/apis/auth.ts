import { NoAuthInstance } from "./instance"

export const postSignUp = async (email: string, password: string) => {
  try {
    return await NoAuthInstance.post('/auth/signup', {email, password});
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const postSignin = async (email: string, password: string) => {
  try {
    return await NoAuthInstance.post(`/auth/signin`, {email, password});
  } catch (err) {
    console.error(err);
    throw err;
  }
};
