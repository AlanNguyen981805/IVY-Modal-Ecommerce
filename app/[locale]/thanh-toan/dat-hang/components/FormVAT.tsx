import { CustomInput } from '@/components';
import React from 'react';

const FormVAT = () => {
  return (
    <div className='mt-6'>
      <CustomInput placeholder="Nhập email" className="mb-4 font-light" />
      <CustomInput placeholder="Nhập tên doanh nghiệp" className="mb-4 font-light" />
      <CustomInput placeholder="Nhập mã số thuế" className="mb-4 font-light" />
      <CustomInput placeholder="Nhập địa chỉ" className="mb-4 font-light" />
    </div>
  );
};

export default FormVAT;
