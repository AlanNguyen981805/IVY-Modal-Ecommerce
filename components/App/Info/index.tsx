'use client';

import CustomInput from '@/components/Input';
import { useStoreAuth } from '@/hooks/useAuth';
import React from 'react';

const InfoCustomer = () => {
  const { user } = useStoreAuth();

  const renderDiscountPoints = (tile: string, value: string) => (
    <div className="flex items-center justify-center w-full border">
      <span className="block w-2/4 text-center border-r">
        <span className="block py-4">{tile}</span>
      </span>
      <b className="w-2/4 text-center text-md">{value}</b>
    </div>
  );
  
  return (
    <div className="flex w-full mt-8">
      <div className="w-2/4">
        <div className="flex items-center mb-4">
          <span className="w-3/6">Họ</span>
          <CustomInput disabled value={user?.firstName} />
        </div>
        <div className="flex items-center my-4">
          <span className="w-3/6">Tên</span>
          <CustomInput disabled value={user?.lastName} />
        </div>
        <div className="flex items-center my-4">
          <span className="w-3/6">Số điện thoại</span>
          <CustomInput disabled value={user?.phone} />
        </div>
        <div className="flex items-center my-4">
          <span className="w-3/6">Email</span>
          <CustomInput disabled value={user?.email} />
        </div>
        <div className="flex items-center my-4">
          <span className="w-3/6">Ngày sinh</span>
          <CustomInput disabled value={user?.dob} />
        </div>
      </div>
      <div className="w-2/4 pl-6">
        {renderDiscountPoints('Điểm chiết khấu', '0')}
        {renderDiscountPoints('Chiết khấu', '0%')}
        {renderDiscountPoints('Hạn thẻ', '12/04/2023')}
      </div>
    </div>
  );
};

export default InfoCustomer;
