import { create } from 'zustand';

interface IModalCart {
  isShowModalCart: boolean;
  openModalSuccess: () => void;
  closeModalSuccess: () => void;
}
export const useModalSuccessCart = create<IModalCart>(set => ({
  isShowModalCart: false,
  openModalSuccess() {
    set(state => ({ isShowModalCart: true }));
  },
  closeModalSuccess() {
    set(state => ({ isShowModalCart: false }));
  },
}));
