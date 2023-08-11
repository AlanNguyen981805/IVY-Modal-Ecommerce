import dynamic from 'next/dynamic';

export const LeftDetail = dynamic(() => import('./LeftDetail'));
export const RightDetail = dynamic(() => import('./RightDetail'));
export const Quantity = dynamic(() => import('./Quantity'));
export const Tabs = dynamic(() => import('./Tabs'));
