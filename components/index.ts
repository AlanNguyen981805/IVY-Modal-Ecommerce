import dynamic from 'next/dynamic';

export const Header = dynamic(() => import('./Header'));
export const Modal = dynamic(() => import('./Modal'));
export const Footer = dynamic(() => import('./Footer'));
export const Slider = dynamic(() => import('./Slider'));
export const Product = dynamic(() => import('./Product'));
export const SlideProducts = dynamic(() => import('./SlideProducts'));
export const CustomButton = dynamic(() => import('./Button'));
export const Breadcrumb = dynamic(() => import('./Breadcrumb'));
export const Accordion = dynamic(() => import('./Accordion'));
export const RangeSlider = dynamic(() => import('./RangeSlider'));
export const Select = dynamic(() => import('./Select'));
export const Sizes = dynamic(() => import('./Sizes'));
export const ModalCart = dynamic(() => import('./ModalCart'));
export { default as CustomInput } from './Input';
export const Toggle = dynamic(() => import('./Toggle'));
export const CustomLoading = dynamic(() => import('./Loading'));
export const StatusPayment = dynamic(() => import('./StatusPayment'));
export const Box = dynamic(() => import('./_share_/Box'));
export const ModalNoti = dynamic(() => import('./_share_/ModalNoti'), { ssr: false });
export const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
});
export const ListFavorites = dynamic(() => import('./Favorites'), {
  ssr: false,
});
