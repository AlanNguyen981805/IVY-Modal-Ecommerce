import { CustomButton, CustomInput } from '@/components';
import React from 'react';

const FormOrder = () => {
  return (
    <div className="ml-8">
      <div className="px-6 py-8 rounded-md bg-gray-100/70">
        <h3 className="mb-4 text-2xl font-medium">Tóm tắt đơn hàng</h3>
        <div className="flex justify-between mb-4 text-base">
          <span>Tổng tiền hàng</span>
          <span>100.000đ</span>
        </div>
        <div className="flex justify-between mb-4 text-base">
          <span className="text-base">Tạm tính</span>
          <span>3.459.000đ</span>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <span className="text-base">Phí vận chuyển</span>
          <span className="font-semibold">3.459.000đ</span>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <span className="text-base">Tiền thanh toán</span>
          <span className="text-xl font-semibold">3.459.000đ</span>
        </div>

        <p className="pt-4 mb-2 text-lg font-semibold border-t">Mã phiếu giảm giá</p>
        <div className="flex gap-6">
          <CustomInput placeholder="Mã giảm giá" />
          <CustomButton title="Áp dụng" className="w-2/5 bg-white" />
        </div>
        <div className="mt-10 mb-2 border "></div>
      </div>
      <CustomButton title="TIẾP TỤC THANH TOÁN" isBgBlack className="w-full py-4 text-xl font-semibold" />
    </div>
  );
};

export default FormOrder;
