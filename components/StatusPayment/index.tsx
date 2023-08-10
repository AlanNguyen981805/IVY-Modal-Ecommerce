import React from 'react';
import { svgError, svgSuccess } from '@/utils/svg';
import CustomButton from '../Button';
import Link from 'next/link';

interface IProps {
  status?: 'success' | 'error';
  message: string;
  linkRedirect?: string;
  titleButton?: string;
}

const StatusPayment: React.FC<IProps> = ({ message, status, linkRedirect, titleButton }) => {
  if (!status) return;
  return (
    <div className="flex items-center justify-center m-6 shadow-xl h-50v">
      <div className="p-1 rounded ">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          {status === 'success' && svgSuccess()}
          {status === 'error' && svgError()}
          <h1 className="text-4xl font-bold bg-clip-text">
            {status === 'success' && 'Bạn đã thanh toán thành công'}
            {status === 'error' && 'Có lỗi thanh toán xảy ra'}
          </h1>
          <p className="pb-24 text-lg font-semibold">{message}</p>
          {linkRedirect && (
            <Link href={linkRedirect}>
              <CustomButton title={titleButton} className="py-3 mt-4" isBgBlack />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatusPayment;
