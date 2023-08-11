"use client"

import React, { useEffect, useState } from 'react';

import { CustomInput } from '@/components';
import { useFormAddressCheckout } from '@/hooks';

interface IFormAddress {
  fullName: string;
  phone: string;
  address: string;
}
const FormAddress = () => {
  const [formAddressUser, setFormAddressUser] = useState<IFormAddress>({
    address: '',
    fullName: '',
    phone: '',
  });
  const { setFormAddressUser: setFormAddressCheckout } = useFormAddressCheckout();

  const onChange = (name: keyof IFormAddress) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormAddressUser(prev => ({ ...prev, [name]: event.target.value }));
  };

  useEffect(() => {
    setFormAddressCheckout(formAddressUser)
  }, [formAddressUser, setFormAddressCheckout]);

  return (
    <>
      <p>Địa chỉ giao hang*</p>
      <div className="flex gap-4 mb-4">
        <CustomInput placeholder="Họ tên" onChange={onChange('fullName')} />
        <CustomInput placeholder="Số điện thoại" onChange={onChange('phone')} />
      </div>
      {/* <div className="flex gap-4">
        <CustomInput placeholder="Họ tên" />
        <CustomInput placeholder="Số điện thoại" />
      </div> */}
      <div className="mt-4">
        <CustomInput placeholder="Địa chỉ" onChange={onChange('address')} />
      </div>
    </>
  );
};

export default FormAddress;
