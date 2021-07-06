import { API, endPoint } from 'api';

interface ISignin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  history: any;
}

export const signin = async ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  history,
}: ISignin) => {
  try {
    const { data } = await API.post(endPoint.SIGNIN, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    localStorage.setItem('profile', JSON.stringify({ ...data }));
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
