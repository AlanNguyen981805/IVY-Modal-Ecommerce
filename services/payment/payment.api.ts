import { IOrderInfo } from '@/types/checkout';
import { DOMAIN } from '../constApi';
import http from '../http';

export const createPayment = async (data: IOrderInfo) => {
  const response = await http.post(DOMAIN.CHECKOUT, data);
  return response.data;
};
