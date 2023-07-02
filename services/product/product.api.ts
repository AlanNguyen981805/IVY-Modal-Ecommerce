import { DOMAIN } from '../constApi';
import http from '../http';

export const getProducts = async (cate: string) => {
  const response = await http.get(DOMAIN.GET_PRODUCTS_BY_CATE + cate);
  return response.data.data;
};
