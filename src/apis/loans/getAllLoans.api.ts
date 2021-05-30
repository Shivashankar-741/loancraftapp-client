import { API, endPoint } from '../../api';

export const getAllLoans = async () => {
  const { data } = await API.get(endPoint.LOANS);
  return data;
};
