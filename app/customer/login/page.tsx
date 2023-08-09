'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { CustomButton, CustomInput } from '@/components';
import { IFormLogin } from '@/types/auth';
import { ROUTER } from '@/utils/consts';
import { useMutation } from '@tanstack/react-query';
import { login } from '@/services/auth/auth.api';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';
import { useStoreAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();
  const { setStoreAuth, user, isLogged } = useStoreAuth();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (body: IFormLogin) => {
      return login(body);
    },
    onSuccess: (data: any) => {
      setStoreAuth(data.data);
      toast.success('Đăng nhập thành công');
      router.push('/');
    },
    onError(error: AxiosError<{ message: string }>, variables, context) {
      toast.error(error?.response?.data.message || '');
    },
  });

  const handleLogin = (data: IFormLogin) => {
    loginMutation.mutate(data);
  };

  useEffect(() => {
    if (isLogged) router.push('/');
  }, [isLogged, router]);

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="flex justify-around pb-6 border-b mt-28">
      <div className="flex-col flex-none w-[480px]">
        <h3 className="mb-4 text-xl font-semibold text-center">Bạn đã có tài khoản IVY</h3>
        <p className="mb-6 text-center text-primary">
          Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi tốt hơn!
        </p>
        <div className="px-6">
          <CustomInput placeholder="Email/SĐT" className="mb-6" {...register('phone')} />
          <CustomInput placeholder="Mật khẩu" {...register('password')} type="password" />
          <div className="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-checkbox" className="ml-2">
              Ghi nhớ đăng nhập
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <Link href={ROUTER.CUSTOMER.FORGOT_PASSWORD}>
              <span className="underline text-primaryDark">Quên mật khẩu</span>
            </Link>
            <span className="underline text-primaryDark">
              <Link href={ROUTER.CUSTOMER.LOGIN_WITH_OTP}>Đăng nhập bằng OTP</Link>
            </span>
          </div>
          <CustomButton type="submit" title="ĐĂNG NHẬP" className="w-full py-4 mt-6 text-xl font-semibold" isBgBlack />
        </div>
      </div>
      <div className="h-64 w-[1px] bg-gray-300"></div>
      <div className="flex-col flex-none w-[480px]">
        <p className="mb-4 text-xl font-semibold text-center">Khách hàng mới của IVY moda</p>
        <p className="mb-6 text-center text-primary">
          Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn này để truy cập biểu mẫu đăng ký. Bằng cách
          cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là một trải nghiệm
          thú vị và nhanh chóng hơn!
        </p>
        <Link href={ROUTER.CUSTOMER.REGISTER}>
          <CustomButton title="ĐĂNG KÝ" className="w-full py-4 mt-4 text-xl font-semibold" isBgBlack />
        </Link>
      </div>
    </form>
  );
};

export default Login;
