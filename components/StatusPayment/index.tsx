import React from 'react';
import Link from 'next/link';

import { SvgError, SvgSuccess } from '@/utils/svg';
import { SITE_MESSAGE } from '@/constants/message';
import { CustomButton } from '..';


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
          {status === 'success' && SvgSuccess()}
          {status === 'error' && SvgError()}
          <h1 className="text-4xl font-bold bg-clip-text">
            {status === 'success' && SITE_MESSAGE.PAYMENT.SUCCESS}
            {status === 'error' && SITE_MESSAGE.PAYMENT.ERROR}
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
