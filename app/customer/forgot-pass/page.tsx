import React from 'react';
import BaseForm from '../components/BaseForm';
import { CustomInput } from '@/components';

const ForgotPassword = () => {
  return (
    <div>
      <BaseForm
        desc="Vui lòng nhập lại email đã đăng ký, hệ thống của chúng tôi sẽ gửi cho bạn 1 đường dẫn để thay đổi mật khẩu."
        title="Bạn muốn tìm lại mật khẩu?"
        titleBtn="Gửi đi"
      >
        <CustomInput placeholder="Số điện thoại..." className="mb-6" />
        <CustomInput placeholder="Nhập ký tự trong hình vào ô sau" className="mb-4" />
      </BaseForm>
    </div>
  );
};

export default ForgotPassword;
