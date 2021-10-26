import { API, endPoint } from 'api';

export const deleteLoan = async (id: string): Promise<boolean> => {
  const { data } = await API.delete(`${endPoint.LOANS}/${id}`);

  return !!data;
};
