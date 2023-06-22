import { CustomButton, CustomInput } from '@/components';
import React from 'react';

const Register = () => {
  const RenderInput = ({ title }: { title: string }) => {
    return (
      <div className="flex-col w-full">
        <span className="text-base">
          {title}.<label className="text-red-500">*</label>
        </span>
        <CustomInput placeholder={title} className="w-full" />
      </div>
    );
  };
  return (
    <>
      <h4 className="block mb-6 text-2xl font-semibold text-center">Đăng Ký</h4>
      <div className="flex gap-6">
        <div className="w-2/4">
          <span className="block mb-6 text-base font-medium">Thông tin khách hàng</span>
          <div className="flex justify-between gap-6 mb-4">
            <RenderInput title="Họ" />
            <RenderInput title="Tên" />
          </div>
          <div className="flex justify-between gap-6 mb-4">
            <RenderInput title="Email" />
            <RenderInput title="Điện thoại" />
          </div>
          <div className="flex justify-between gap-6 mb-4">
            <RenderInput title="Ngày sinh " />
            <RenderInput title="Giới tính " />
          </div>
          <div className="flex justify-between gap-6 mb-4">
            <RenderInput title="Tỉnh/Tp " />
            <RenderInput title="Quận/Huyện" />
          </div>
          <div className="mb-4">
            <RenderInput title="Phường/Xã" />
          </div>
          <RenderInput title="Địa chỉ" />
        </div>
        <div className="w-2/4">
          <span className="block mb-6 text-base font-medium">Thông tin mật khẩu</span>
          <div className="mb-4">
            <RenderInput title="Mật khẩu" />
          </div>
          <div className="mb-4">
            <RenderInput title="Nhập lại mật khẩu" />
          </div>
          <div className="mb-4">
            <RenderInput title="Mời nhập các ký tự trong hình vào ô sau" />
          </div>
          <div className="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="ml-2">
              Đồng ý với các điều khoản của IVY
            </label>
          </div>
          <div className="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="ml-2">
              Đăng ký nhận bản tin
            </label>
          </div>
          <CustomButton title='ĐĂNG KÝ' isBgBlack className='w-full py-4 mt-6 text-xl font-medium' />
        </div>
      </div>
    </>
  );
};

export default Register;
