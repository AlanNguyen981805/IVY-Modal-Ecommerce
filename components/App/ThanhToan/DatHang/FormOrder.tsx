'use client';

import { CustomButton, CustomInput } from '@/components';
import { useFormAddressCheckout } from '@/hooks/useFormCheckout';
import { useGetLinkPayment } from '@/hooks/useGetLinkPayment';
import { useProductStore } from '@/hooks/useProductStore';
import { DOMAIN } from '@/services/constApi';
import { createPayment } from '@/services/payment/payment.api';
import { ROUTER } from '@/utils/consts';
import { tranformCurrency } from '@/utils/tranform';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const FormOrder = () => {
  const [hydrated, setHydrated] = useState(false);
  const { products, total, methodCheckout } = useProductStore();
  const { formAddressUser } = useFormAddressCheckout();
  const router = useRouter();

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  const handleCheckout = async () => {
    try {
      const { address, fullName, phone } = formAddressUser;
      if (products.length <= 0) {
        toast.error('Không có sản phẩm trong giỏ hàng');
        return;
      }
      if (!address || !fullName || !phone) {
        toast.error('Vui long nhap day du thong tin dia chi giao hang');
        return;
      }
      if (methodCheckout === 'COD') {
        return router.push(ROUTER.PAYMENT.CHECKOUT_SUCCESS);
      }
      const res = await createPayment({
        amount: total.toString(),
        orderInfo: 'noi dung thanh toan',
        type: methodCheckout,
      });
      if (res) {
        const newWindow = window.open(res.payUrl, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
      }
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  return (
    <div className="ml-8">
      <div className="px-6 py-8 rounded-md bg-gray-100/70">
        <h3 className="mb-4 text-2xl font-medium">Tóm tắt đơn hàng</h3>
        <div className="flex justify-between mb-4 text-base">
          <span>Tổng tiền hàng</span>
          <span>{tranformCurrency(total)}đ</span>
        </div>
        <div className="flex justify-between mb-4 text-base">
          <span className="text-base">Tạm tính</span>
          <span>{tranformCurrency(total)}đ</span>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <span className="text-base">Phí vận chuyển</span>
          <span className="font-semibold">{tranformCurrency(total)}đ</span>
        </div>
        <div className="flex justify-between mb-6 text-base">
          <span className="text-base">Tiền thanh toán</span>
          <span className="text-xl font-semibold">{tranformCurrency(total)}đ</span>
        </div>

        <p className="pt-4 mb-2 text-lg font-semibold border-t">Mã phiếu giảm giá</p>
        <div className="flex gap-6">
          <CustomInput placeholder="Mã giảm giá" />
          <CustomButton title="Áp dụng" className="w-2/5 bg-white" />
        </div>
        <div className="mt-10 mb-2 border "></div>
      </div>
      <CustomButton
        title="TIẾP TỤC THANH TOÁN"
        isBgBlack
        className="w-full py-4 text-xl font-semibold"
        onClick={handleCheckout}
      />
    </div>
  );
};

export default FormOrder;
