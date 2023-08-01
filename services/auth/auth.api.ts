import { IFormLogin } from '@/types/auth';
import { DOMAIN } from '../constApi';
import http from '../http';

export const login = async (formLogin: IFormLogin) => {
  const response = await http.post<IFormLogin>(DOMAIN.LOGIN, formLogin);
  return response.data;
};
