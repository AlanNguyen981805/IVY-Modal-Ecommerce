'use client';

import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { PaymentMethods } from '@/constants/indext';
import { IPayment } from '@/types/checkout';
import { useProductStore } from '@/hooks';
import { Box } from '@/components';

const FormPaymentMethods = () => {
  const { onChangeMethodCheckout, methodCheckout } = useProductStore();
  const [methodPaymentActive, setMethodPaymentActive] = useState<IPayment>(methodCheckout);

  const isPaymentActive = (type: IPayment) => {
    if (methodPaymentActive === type) return true;
    return false;
  };

  const handleChangeMothod = (method: IPayment) => {
    onChangeMethodCheckout(method);
    setMethodPaymentActive(method);
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2 text-xl font-semibold">Phương thức thanh toán</h3>
      <Box>
        <span className="block pb-6 text-gray-500">
          Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không bao giờ được lưu lại.
        </span>

        {PaymentMethods.map(item => (
          <div
            className="flex items-center mb-6 cursor-pointer"
            key={item.type}
            onClick={() => handleChangeMothod(item.type)}
          >
            <li
              style={{ backgroundColor: isPaymentActive(item.type) ? 'black' : 'white' }}
              className={`flex items-center justify-center w-4 h-4 rounded-full  transition cursor-pointer border border-black mr-2`}
            >
              {isPaymentActive(item.type) && <BsCheckLg color={'white'} />}
            </li>
            <span className="text-gray-700">{item.title}</span>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default FormPaymentMethods;
