import { API, endPoint } from 'api';

export interface IAddLoan {
  date: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  address: string;
  amount: number;
  notes: string;
  creator: string;
}

export const addLoan = async (values: IAddLoan): Promise<boolean> => {
  console.log(values);
  const { data } = await API.post(endPoint.LOANS, values);

  return !!data;
};
