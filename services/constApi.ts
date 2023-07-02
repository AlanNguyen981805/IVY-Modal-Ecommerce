const CATEGORY = 'categories';
const CONFIG_PAGE = 'setting';
const PRODUCTS = 'products';

export enum DOMAIN {
  GET_CONFIG_PAGE = CONFIG_PAGE,
  GET_CATEGORY = CATEGORY,
  GET_PRODUCTS_BY_CATE = PRODUCTS + '/category',
}
