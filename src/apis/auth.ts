import { NoAuthInstance } from "./instance"

export const postSignUp = (email: string, password: string) => {
  try {
    NoAuthInstance.post('/auth/signup', {email, password});
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const postSignin = (email: string, password: string) => {
  try {
    NoAuthInstance.post(`/auth/signin`, {email, password});
  } catch (err) {
    console.error(err);
    throw err;
  }
};
