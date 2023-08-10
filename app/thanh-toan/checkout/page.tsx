'use client';

import Process from '@/components/App/ThanhToan/Process';
import StatusPayment from '@/components/StatusPayment';
import { IPaymentCode, PAYMENT_MOMO_CODE, PAYMENT_VNPAY_CODE } from '@/constants/paymentCode';
import { ROUTER } from '@/utils/consts';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface IProps {
  searchParams: { vnp_ResponseCode?: string; resultCode?: string; type?: 'momo' | 'vnpay' };
}
const CheckoutPage: React.FC<IProps> = ({ searchParams }) => {
  const vnPayCode = searchParams.vnp_ResponseCode;
  const momoCode = searchParams.resultCode;
  const typePayment = searchParams.type;
  const router = useRouter();
  const [resultPayment, setResultPayment] = useState<IPaymentCode | null>(null);

  useEffect(() => {
    if (typePayment === 'momo') {
      const foundCodeMOMO = PAYMENT_MOMO_CODE.find(item => item.code === momoCode);
      setResultPayment(foundCodeMOMO || null);
      if (foundCodeMOMO?.type === 'success') {
        router.push(ROUTER.PAYMENT.CHECKOUT_SUCCESS);
      }
    }
    if (typePayment === 'vnpay') {
      const foundCodeVNPAY = PAYMENT_VNPAY_CODE.find(item => item.code === vnPayCode);
      setResultPayment(foundCodeVNPAY || null);
      if (foundCodeVNPAY?.type === 'success') {
        router.push(ROUTER.PAYMENT.CHECKOUT_SUCCESS);
      }
    }
  }, [momoCode, typePayment, vnPayCode]);

  return (
    <>
      <Process step0 step1 step2 />
      <StatusPayment
        titleButton="Quay trở lại trang đặt hàng"
        linkRedirect={ROUTER.PAYMENT.ORDER}
        message={resultPayment?.message || ''}
        status={resultPayment?.type}
      />
    </>
  );
};

export default CheckoutPage;
