import { IProduct, IResponseProductByCate } from '@/types/product';
import { DOMAIN } from '../constApi';
import http from '../http';

export const getProductsByCate = async (cate: string) => {
  const response = await http.get<{ data: IResponseProductByCate }>(DOMAIN.GET_PRODUCTS_BY_CATE + '/' + cate);
  return response.data.data;
};

export const getDetailProduct = async (slug: string) => {
  const response = await http.get<{ data: IProduct }>(DOMAIN.GET_PRODUCT + '/' + slug);
  return response.data.data;
};
