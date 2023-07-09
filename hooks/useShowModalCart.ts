import { create } from 'zustand';

interface IModalCart {
  isShowModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}
export const useShowModalCart = create<IModalCart>(set => ({
  isShowModal: false,
  openModal() {
    set(state => ({ isShowModal: true }));
  },
  closeModal() {
    set(state => ({ isShowModal: false }));
  },
}));
