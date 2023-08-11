'use client';

import React, { useState } from 'react';

import { CustomButton, Toggle } from '@/components';
import { useStoreAuth } from '@/hooks';
import Box from '@/components/_share_/Box';

import { FormAddress, FormPaymentMethods, FormVAT } from '.';
import { Process } from './../index';

const Left = () => {
  const [showFormVAT, setShowFormVAT] = useState(false);
  const { isLogged } = useStoreAuth();

  return (
    <div className="w-full ">
      <Process step0 step1 />
      <div className="flex gap-6 mt-6">
        <div className="w-3/5">
          {!isLogged ? (
            <>
              <span className="mb-4 text-xl font-semibold">Địa chỉ giao hàng</span>
              <div className="flex gap-4">
                <CustomButton title="ĐĂNG NHẬP" isBgBlack className="px-10 py-3 font-medium" />
                <CustomButton title="ĐĂNG KÝ" className="px-10 py-3 font-medium" />
              </div>
              <span className="mt-4 text-xs text-primary">
                Đăng nhập/ Đăng ký tài khoản để được tích điểm và nhận thêm nhiều ưu đãi từ IVY moda.
              </span>
              <FormAddress />
            </>
          ) : (
            <>
              <Box>
                <strong className="block pb-2">Nguyễn Ngọc Hiệp</strong>
                <p>
                  Điện thoại: <strong>0898560570</strong>
                </p>
                <p>
                  Địa chỉ: <strong>Xã Tân lập, Đan phượng Hà Nội</strong>
                </p>
              </Box>
              <CustomButton title="+ Thêm địa chỉ" isBgBlack className="mt-4" />
            </>
          )}
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
      <div>
        <FormPaymentMethods />
      </div>
    </div>
  );
};

export default Left;
