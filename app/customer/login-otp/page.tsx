import React from 'react';
import BaseForm from '../../../components/App/Customer/BaseForm';
import { CustomInput } from '@/components';

const LoginWithOtp = () => {
  return (
    <div>
      <BaseForm
        desc="Vui lòng nhập số điện thoại, hệ thống của chúng tôi sẽ gửi cho bạn 1 mã OTP để đăng nhập."
        title="Đăng nhập bằng OTP"
        titleBtn="Gửi đi"
      >
        <CustomInput placeholder="Số điện thoại..." className="mb-6" />
        <CustomInput placeholder="Nhập ký tự trong hình vào ô sau" className="mb-4" />
      </BaseForm>
    </div>
  );
};

export default LoginWithOtp;
