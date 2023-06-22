import React from 'react';

import { CustomInput } from '@/components';

const FormAddress = () => {
  return (
    <>
      <p>Địa chỉ</p>
      <div className="flex gap-4 mb-4">
        <CustomInput placeholder="Họ tên" />
        <CustomInput placeholder="Số điện thoại" />
      </div>
      <div className="flex gap-4">
        <CustomInput placeholder="Họ tên" />
        <CustomInput placeholder="Số điện thoại" />
      </div>
      <div className="mt-4">
        <CustomInput placeholder="Địa chỉ" />
      </div>
    </>
  );
};

export default FormAddress;
