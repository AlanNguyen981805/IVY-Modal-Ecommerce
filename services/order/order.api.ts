import { cookies } from 'next/headers';
import { DOMAIN } from '../constApi';
import http from '../http';
import { IResponseOrders } from '@/types/order';

export const getOrderByUser = async (): Promise<IResponseOrders> => {
   const response = await http.get(DOMAIN.ORDER);
  return response.data;
};
