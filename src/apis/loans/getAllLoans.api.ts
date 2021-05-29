import { API } from '../../api';

export const getAllLoans = async () => {
  const { data } = await API.get('/loans');
  return data;
};
