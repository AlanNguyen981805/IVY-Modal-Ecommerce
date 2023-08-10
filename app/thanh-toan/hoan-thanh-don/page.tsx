import { StatusPayment } from '@/components';
import Process from '@/components/App/ThanhToan/Process';
import { ROUTER } from '@/utils/consts';
import React from 'react';

interface IProps {
  searchParams: string;
}
const CheckoutPage: React.FC<IProps> = ({ searchParams }) => {
  return (
    <div>
      <Process step0 step1 step2 step3 />

      <StatusPayment
        message="Cảm ơn bạn đã mua hàng"
        titleButton="Tiếp tục mua hàng"
        linkRedirect={ROUTER.HOME}
        status="success"
      />
    </div>
  );
};

export default CheckoutPage;
