'use client';
import React, { useState } from 'react';

import icons from '@/utils/icons';
import ModalCart from '@/components/ModalCart';

import { listTopSeach } from '../data.header';

const {
  CiSearch,
  HiOutlineShoppingBag,
  BsHeadphones,
  AiOutlineUser,
  BiPhoneCall,
  BsChatDots,
  TfiReload,
  TfiEmail,
  FaPaw,
} = icons;
interface IProps {
  placeholderInput: string;
}
const HeaderRight: React.FC<IProps> = ({ placeholderInput }) => {
  const [isShowMostSearchModal, setIsShowMostSearchModal] = useState(false);
  const [isShowHelperModal, setIsShowHelperModal] = useState(false);
  const [isShowModalCart, setIsShowModalCart] = useState(false);

  const handleOnMouseEnter = () => {
    setIsShowMostSearchModal(true);
  };

  const handleOnMouseLeave = () => {
    setIsShowMostSearchModal(false);
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
          <BsHeadphones size={20} onClick={() => setIsShowHelperModal(!isShowHelperModal)} />
        </span>
        <span className="mr-6 cursor-pointer">
          <AiOutlineUser size={20} />
        </span>
        <span className="mr-6 cursor-pointer" onClick={() => setIsShowModalCart(true)}>
          <HiOutlineShoppingBag size={20} />
        </span>

        {isShowHelperModal && (
          <div className="absolute w-[255px] right-28 bg-white px-[23px] py-6  top-12 animate-slide-up border border-[#E7E8E9]  ">
            <span className="block font-semibold">Trợ giúp</span>
            <div className="flex-col flex-wrap mt-3 text-[#808285]">
              <div className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition">
                <BiPhoneCall />
                <span className="text-sm font-semibold">Hotline</span>
              </div>
              <div className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition">
                <BsChatDots />
                <span className="text-sm font-semibold">Live Chat</span>
              </div>
              <div className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition">
                <TfiReload />
                <span className="text-sm font-semibold">Messages</span>
              </div>
              <div className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition">
                <TfiEmail />
                <span className="text-sm font-semibold">Email</span>
              </div>
              <div className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition">
                <FaPaw />
                <span className="text-sm font-semibold">Tra cứu đơn hàng</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <ModalCart
        className={{
          'mr-[-450px]': !isShowModalCart,
          'mr-0': isShowModalCart,
        }}
        onClose={() => setIsShowModalCart(false)}
      />
    </div>
  );
};

export default HeaderRight;
