import { IProduct, IResponseProductByCate } from '@/types/product';
import { DOMAIN } from '../constApi';
import http from '../http';
import { transformToQueryString } from '@/utils/tranform';

export const getProductsByCate = async (cate: string, query?: string) => {
  const response = await http.get<{ data: IResponseProductByCate }>(
    DOMAIN.GET_PRODUCTS_BY_CATE + '/' + cate + `?${query}`,
  );
  return response.data.data;
};

export const getProducts = async (category?: string, query?: { [key: string]: string | string[] | undefined }) => {
  const urlAPI = category ? DOMAIN.GET_PRODUCTS_BY_CATE + '/' + category : DOMAIN.GET_PRODUCT;
  const querySearch = query && transformToQueryString(query);
  const response = await http.get<{ data: IResponseProductByCate }>(`${urlAPI}?${querySearch}`);
  return response.data.data;
};

export const getDetailProduct = async (slug: string) => {
  const response = await http.get<{ data: IProduct }>(DOMAIN.GET_PRODUCT + '/' + slug);
  return response.data.data;
};
