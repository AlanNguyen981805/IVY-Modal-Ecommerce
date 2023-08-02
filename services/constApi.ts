const CATEGORY = 'categories';
const CONFIG_PAGE = 'setting';
const PRODUCTS = 'products';
const SLIDER = 'slider';
const COLOR = 'color';
const SIZE = 'size';
const AUTH = 'auth';

export enum DOMAIN {
  GET_CONFIG_PAGE = CONFIG_PAGE,
  GET_CATEGORY = CATEGORY,
  GET_PRODUCTS_BY_CATE = PRODUCTS + '/category',
  GET_PRODUCT = PRODUCTS,
  ADD_FAVORITE_PRODUCT = PRODUCTS + '/favorite',
  GET_FAVORITE_PRODUCT = PRODUCTS + '/favorite/lists',
  GET_SLIDER = SLIDER,
  GET_SIZE = SIZE,
  GET_COLOR = COLOR,
  LOGIN = AUTH + '/login',
  REGISTER = AUTH + '/register',
}
