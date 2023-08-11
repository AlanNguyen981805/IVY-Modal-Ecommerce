import dynamic from 'next/dynamic';

export const Colors = dynamic(() => import('./Colors'));
export const Label = dynamic(() => import('./Label'));
export const ModalSize = dynamic(() => import('./ModalSize'));
