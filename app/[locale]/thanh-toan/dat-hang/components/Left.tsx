'use client';

import React, { useState } from 'react';
import Process from '../../components/Process';
import { CustomButton, Toggle } from '@/components';
import FormAddress from './FormAddress';
import FormVAT from './FormVAT';

const Left = () => {
  const [showFormVAT, setShowFormVAT] = useState(false);

  return (
    <div className="w-full ">
      <Process step1 />
      <div className="flex gap-6 mt-6">
        <div className="w-3/5">
          <p className="mb-4 text-xl font-semibold">Địa chỉ giao hàng</p>
          <div className="flex gap-4">
            <CustomButton title="ĐĂNG NHẬP" isBgBlack className="px-10 py-3 font-medium" />
            <CustomButton title="ĐĂNG KÝ" className="px-10 py-3 font-medium" />
          </div>
          <p className="mt-4 text-xs text-primary">
            Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu đãi từ IVY moda.
          </p>
          <FormAddress />
        </div>
        <div className="w-2/5">
          <p className="mb-4 text-xl font-semibold">Phương thức giao hàng</p>
          <div className="p-6 bg-white border rounded-tl-[36px] rounded-br-[36px]">
            <p className="mb-4 text-sm font-semibold">Chuyển phát nhanh</p>
            <p className="text-xs">Thời gian giao hàng dự kiến: Thứ 7, 24/06/2023</p>
          </div>
          <div className="mt-6 text-xl font-semibold">
            Bạn có muốn nhận hoá đơn VAT không?
            <Toggle
              onChange={value => {
                if (value) setShowFormVAT(true);
                else setShowFormVAT(false);
              }}
            />
            {showFormVAT && <FormVAT />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
