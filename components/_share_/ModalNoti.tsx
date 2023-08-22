'use client';
import { useModalSuccessCart } from '@/hooks';
import icons from '@/utils/icons';
import classNames from 'classnames';
import { useEffect } from 'react';

const { BsCartCheck } = icons;
const ModalNoti = () => {
  const { isShowModalCart, closeModalSuccess } = useModalSuccessCart();

  useEffect(() => {
    if (isShowModalCart) {
      setTimeout(() => {
        closeModalSuccess();
      }, 1500);
    }
  }, [closeModalSuccess, isShowModalCart]);
  
  return (
    <>
      <div
        id="defaultModal"
        aria-hidden="true"
        className={classNames(
          'fixed top-0 left-0 right-0 z-50 transition duration-700 flex items-center justify-center w-full h-full max-h-full p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70 md:inset-0',
          {
            hidden: !isShowModalCart,
          },
        )}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white">
            <div className="flex items-start justify-between p-4 ">
              <button
                type="button"
                className="inline-flex items-center justify-center w-8 h-8 ml-auto text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 "
                data-modal-hide="defaultModal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="flex flex-col items-center justify-center p-6 pb-20 space-y-6">
              <span>
                <BsCartCheck size={200} />
              </span>
              <span>
                <strong className="text-2xl uppercase">Thêm vào giỏ hàng thành công</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNoti;
