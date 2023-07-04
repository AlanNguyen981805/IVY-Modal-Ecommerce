const CATEGORY = 'categories';
const CONFIG_PAGE = 'setting';
const PRODUCTS = 'products';
const SLIDER = 'slider';

export enum DOMAIN {
  GET_CONFIG_PAGE = CONFIG_PAGE,
  GET_CATEGORY = CATEGORY,
  GET_PRODUCTS_BY_CATE = PRODUCTS + '/category',
  GET_PRODUCT = PRODUCTS,
  GET_SLIDER = SLIDER,
}
