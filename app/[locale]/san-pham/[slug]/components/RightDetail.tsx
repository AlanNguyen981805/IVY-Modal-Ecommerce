'use client';

import React, { useState } from 'react';

import icons from '@/utils/icons';
import { CustomButton, Sizes } from '@/components';
import Colors from '@/components/Product/components/Colors';

import { Quantity, Tabs } from './index';

const { AiFillStar, AiOutlineHeart } = icons;
const RightDetail = () => {
  const [active, setColorActive] = useState('2');
  return (
    <div className="ml-8">
      <span className="text-3xl font-semibold text-primaryDark">AGNES DRESS - ĐẦM SENORA CỔ YẾM</span>
      <div className="flex items-center text-[#6c6d70] mt-3">
        <span>SKU: 24FJĐSS</span>
        <span className="flex pl-10 pr-4">
          {Array.from(Array(5)).map(item => (
            <AiFillStar size={20} className="text-yellow-400" key={item} />
          ))}
        </span>
        <span>(0 đánh giá)</span>
      </div>

      <p className="mt-6 text-2xl font-semibold text-primaryDark">
        2.900.900 <del className="text-lg font-medium text-primary">2.190.000</del>
      </p>

      <p className="mt-6 mb-6 text-xl font-semibold">Màu sắc: Trắng</p>

      <Colors
        setColorActive={setColorActive}
        colorActive={active}
        colors={[
          {
            id: '1',
            code: '#594d4d',
            active: true,
          },
          {
            id: '2',
            code: '#743535',
          },
          {
            id: '3333',
            code: '#5a0303',
          },
          {
            id: '4222',
            code: '#273b60',
          },
        ]}
      />

      <Sizes
        sizes={['S', 'M', 'L', 'XL']}
        isShowCheckSize
        isMultiSelected={false}
        onChange={value => console.log(value)}
      />

      <Quantity />

      <div className="flex gap-3 mt-6">
        <CustomButton title="Thêm vào giỏ" className="px-8 py-4 ml-0 font-semibold" isBgBlack />
        <CustomButton title="Mua hàng" className="px-8 py-4 font-semibold" />
        <CustomButton title={(<AiOutlineHeart size={24} />) as unknown as string} />
      </div>
      <p className="mt-3 mb-16 underline text-primary">Tìm tại cửa hàng</p>

      <Tabs />
    </div>
  );
};

export default RightDetail;
