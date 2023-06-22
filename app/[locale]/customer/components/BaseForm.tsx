import { CustomButton } from '@/components';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  titleBtn: string;
}
const BaseForm: React.FC<IProps> = ({ children, desc, title, titleBtn }) => {
  return (
    <div className="flex-col items-center pb-6 border-b mt-28">
      <p className="mb-4 text-xl font-semibold text-center text-primaryDark">{title}</p>
      <p className="mb-6 text-center text-primary">{desc}</p>
      <div className="w-[400px] m-auto">
        {children}
        <CustomButton title={titleBtn} className="w-full py-4 mt-6 text-xl font-semibold" isBgBlack />
      </div>
    </div>
  );
};

export default BaseForm;
