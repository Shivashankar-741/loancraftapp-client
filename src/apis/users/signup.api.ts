import { API, endPoint } from 'api';

interface ISignup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signup = async (values: ISignup) => {
  try {
    const { data } = await API.post(endPoint.SIGNUP, values);
    return !!data;
  } catch (error) {
    console.log(error);
  }
};
