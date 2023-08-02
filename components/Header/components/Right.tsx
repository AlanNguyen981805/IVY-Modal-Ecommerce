'use client';

import React, { useState } from 'react';

import icons from '@/utils/icons';
import { ROUTER } from '@/utils/consts';
import { useProductStore } from '@/hooks/useProductStore';
import { useShowModalCart } from '@/hooks/useShowModalCart';
import { useStoreAuth } from '@/hooks/useAuth';
import { MenuCustomer, MenuHelper } from '@/constants/indext';

import { listTopSeach } from '../data.header';
import { useRouter } from 'next/navigation';
import { PopupHeaderRight } from '.';

const { CiSearch, HiOutlineShoppingBag, BsHeadphones, AiOutlineUser } = icons;
interface IProps {
  placeholderInput: string;
}
const HeaderRight: React.FC<IProps> = ({ placeholderInput }) => {
  const [isShowMostSearchModal, setIsShowMostSearchModal] = useState(false);
  const [isShowHelperModal, setIsShowHelperModal] = useState(false);
  const [isShowPopupUserManagement, setIsShowPopupUserManagement] = useState(false);
  const { products }: any = useProductStore();
  const { openModal } = useShowModalCart();
  const router = useRouter();
  const { isLogged } = useStoreAuth();

  const handleOnMouseEnter = () => {
    setIsShowMostSearchModal(true);
  };

  const handleOnMouseLeave = () => {
    setIsShowMostSearchModal(false);
  };

  const handleCustomer = () => {
    setIsShowHelperModal(false)
    isLogged ? setIsShowPopupUserManagement(!isShowPopupUserManagement) : router.push(ROUTER.CUSTOMER.LOGIN);
  };

  return (
    <div>
      <div className="relative flex items-center">
        <div
          className="relative w-full gap-2 mr-12 before:content-[''] before:w-[440px] before:top-8 before:block before:absolute before:h-10 "
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch size={24} />
          </div>
          <input
            type="text"
            id="simple-search"
            className="border outline-none border-[#E7E8E9] placeholder-gray-500  text-xs rounded-md  block w-full pl-10 p-2.5 2xl:w-[360px]"
            placeholder={placeholderInput}
            required
          />
          {isShowMostSearchModal && (
            <div className="absolute w-[440px] bg-white px-[23px] py-6  top-12 animate-slide-up border border-[#E7E8E9]  ">
              <span className="block font-semibold">Tìm kiếm nhiều nhất</span>
              <div className="flex flex-wrap mt-3">
                {listTopSeach.map(item => (
                  <span
                    className="px-3 py-2 text-[#6C6D70] text-sm border border-[#E7E8E9] mb-2 mr-2  rounded-tl-lg rounded-br-lg boder"
                    key={item.id}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <span className="mr-6 cursor-pointer">
          <BsHeadphones
            size={20}
            onClick={() => {
              setIsShowHelperModal(!isShowHelperModal);
              setIsShowPopupUserManagement(false);
            }}
          />
        </span>
        <span className="mr-6 cursor-pointer">
          <div onClick={() => handleCustomer()}>
            <AiOutlineUser size={20} />
          </div>
        </span>
        <div className="relative mr-6 cursor-pointer" onClick={openModal}>
          <HiOutlineShoppingBag size={20} />
          <span className="absolute w-5 h-5 flex items-center justify-center text-xs top-[-15px] right-[-25px] text-white bg-black rounded-full">
            {products?.length}
          </span>
        </div>

        {isShowHelperModal && <PopupHeaderRight menu={MenuHelper} name="Trợ giúp" position="right-28" />}
        {isShowPopupUserManagement && (
          <PopupHeaderRight menu={MenuCustomer} name="Tài khoản của tôi" position="right-16" />
        )}
      </div>
    </div>
  );
};

export default HeaderRight;
