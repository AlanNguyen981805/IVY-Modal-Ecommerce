import dynamic from 'next/dynamic';

export const FooterCenter = dynamic(() => import('./Center'));
export const FooterLeft = dynamic(() => import('./Left'));
export const FooterRight = dynamic(() => import('./Right'));
