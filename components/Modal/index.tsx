'use client';

import { useShowModalCart } from '@/hooks/useShowModalCart';
import ModalCart from '../ModalCart';

const Modal = () => {
  const { isShowModal } = useShowModalCart();
  return (
    <div>
        <ModalCart
          className={{
            'mr-[-450px]': !isShowModal,
            'mr-0': isShowModal,
          }}
        />
    </div>
  );
};

export default Modal;
