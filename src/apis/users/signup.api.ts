import { API, endPoint } from 'api';
interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  history: any;
}

export const signup = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  history,
}: ISignup) => {
  try {
    const { data } = await API.post(endPoint.SIGNUP, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    localStorage.setItem('profile', JSON.stringify({ ...data }));
    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};
