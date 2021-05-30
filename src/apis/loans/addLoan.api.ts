import { API, endPoint } from 'api';

interface IAddLoan {
  date: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  alternativeMobileNumber: string;
  address: string;
  amount: number;
  notes: string;
}

export const addLoan = async (values: IAddLoan): Promise<boolean> => {
  const { data } = await API.post(endPoint.LOANS, values);

  return !!data;
};
