import dynamic from 'next/dynamic';

export { default as Header } from './Header';
export { default as Footer } from './Footer';
export { default as Slider } from './Slider';
export { default as Product } from './Product';
export { default as SlideProducts } from './SlideProducts';
export { default as CustomButton } from './Button';
export { default as Breadcrumb } from './Breadcrumb';
export { default as Accordion } from './Accordion';
export { default as RangeSlider } from './RangeSlider';
export { default as Select } from './Select';
export { default as Sizes } from './Sizes';
export { default as ModalCart } from './ModalCart';
export { default as CustomInput } from './Input';
export { default as Toggle } from './Toggle';
export { default as CustomLoading } from './Loading';
export const Sidebar = dynamic(() => import('./Sidebar'), {
  ssr: false,
});
export const ListFavorites = dynamic(() => import('./Favorites'), {
  ssr: false
});
