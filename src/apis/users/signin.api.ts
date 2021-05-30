import { API, endPoint } from 'api';

interface ISignin {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signin = async (values: ISignin) => {
  console.log(values);

  try {
    const { data } = await API.post(endPoint.SIGNIN, values);
    return !!data;
  } catch (error) {
    console.log(error);
  }
};
