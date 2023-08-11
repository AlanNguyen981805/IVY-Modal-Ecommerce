import dynamic from 'next/dynamic';

export const HeaderLeft = dynamic(() => import('./Left'));
export const HeaderCenter = dynamic(() => import('./Center'));
export const SubCate = dynamic(() => import('./SubCate'));
export const HeaderRight = dynamic(() => import('../components/Right'), {
  ssr: false,
});
export const PopupHeaderRight = dynamic(() => import('../components/Popup'), {
  ssr: false,
});
