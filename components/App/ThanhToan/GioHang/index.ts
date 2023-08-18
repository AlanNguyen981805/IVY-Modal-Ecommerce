import dynamic from 'next/dynamic';

export const GioHangLeft = dynamic(() => import('./Left'));
export const ListProducts = dynamic(() => import('./ListProducts'));
export const GioHangRight = dynamic(() => import('./Right'));
