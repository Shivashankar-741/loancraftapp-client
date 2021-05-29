import { API } from 'api';

export const addLoan = async () => {
  const { data } = await API.post('/loans');

  return !!data;
};
