import dynamic from 'next/dynamic';

export { default as HeaderLeft } from './Left';
export { default as HeaderCenter } from './Center';
// export { default as HeaderRight } from './Right';

export const HeaderRight = dynamic(() => import('../components/Right'), {
  ssr: false,
});
export const PopupHeaderRight = dynamic(() => import('../components/Popup'), {
  ssr: false,
});
