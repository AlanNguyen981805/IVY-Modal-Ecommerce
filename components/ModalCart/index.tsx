'use client';

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { ROUTER } from '@/utils/consts';
import { tranformCurrency } from '@/utils/tranform';

import ItemCart from './ItemCart';
import { useProductStore, useShowModalCart, useStoreAuth } from '@/hooks';

const { RiCloseFill } = icons;
interface IProps {
  className?: any;
}
const ModalCart: React.FC<IProps> = ({ className }) => {
  const router = useRouter();
  const { products, total } = useProductStore();
  const { closeModal } = useShowModalCart();
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const { isLogged } = useStoreAuth();

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    closeModal();
  }, [pathname, closeModal]);

  if (!hydrated) return null;

  return (
    <div
      className={classNames(
        'fixed top-0 w-full z-40 transition-all duration-700 right-0 max-w-[420px] bg-white border h-full shadow-md',
        className,
      )}
    >
      <div className="flex justify-between px-5 py-6 border-b">
        <h1 className="flex text-2xl font-semibold">
          Giỏ hàng{' '}
          <span className="flex items-center justify-center w-4 h-4 p-4 ml-2 text-base text-white rounded-full bg-primaryDark">
            {products.length}
          </span>
        </h1>
        <span className="transition duration-700 cursor-pointer hover:rotate-180" onClick={closeModal}>
          <RiCloseFill size={30} />
        </span>
      </div>
      <div className="p-4 max-h-[65vh] overflow-y-auto">
        {products.map(item => (
          <ItemCart product={item} key={item.sku} />
        ))}
      </div>
      <p className="absolute block w-full px-4 pt-8 mb-4 text-sm text-right border-b bottom-36">
        Tổng cộng: <span className="text-xl font-semibold">{tranformCurrency(total.toString())}</span>
      </p>
      <div className="absolute bottom-0 w-full px-4 pb-4">
        <button
          onClick={() => {
            router.push(`${ROUTER.PAYMENT.CART}`);
          }}
          className="w-full mb-4 text-xl font-semibold text-center text-white transition-all duration-700 bg-black border h-14 hover:bg-white hover:text-primaryDark"
        >
          XEM GIỎ HÀNG
        </button>
        {!isLogged && (
          <button
            onClick={() => router.push(`${ROUTER.CUSTOMER.LOGIN}`)}
            className="w-full text-xl font-semibold text-center transition-all duration-700 border h-14 hover:bg-black hover:text-white"
          >
            ĐĂNG NHẬP
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
