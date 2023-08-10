import { create } from 'zustand';

interface IGetLinkPayment {
  linkPayment: string;
  setLinkPayment: (link: string) => void;
}
export const useGetLinkPayment = create<IGetLinkPayment>(set => ({
  linkPayment: '',
  setLinkPayment(link) {
    set(state => ({ linkPayment: link }));
  },
}));