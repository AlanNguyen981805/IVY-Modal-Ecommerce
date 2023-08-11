import dynamic from 'next/dynamic';

export const FormAddress = dynamic(() => import('./FormAddress'));
export const FormOrder = dynamic(() => import('./FormOrder'));
export const FormPaymentMethods = dynamic(() => import('./FormPaymentMethods'));
export const FormVAT = dynamic(() => import('./FormVAT'));
export const Left = dynamic(() => import('./Left'));
export const Right = dynamic(() => import('./Right'));