import { Logo, LogoBoCongThuong, LogoDCMA } from '@/components/Header/data.header';
import Image from 'next/image';
import React from 'react';
import { dataFooter } from '../data.footer';

const Left = () => {
  return (
    <div>
      <div className="flex mb-4">
        <Image src={Logo} alt="logo" width={110} height={110} className="mr-4" />
        <Image src={LogoDCMA} alt="logo" width={90} height={30} className="mr-4" />
        <Image src={LogoBoCongThuong} alt="logo" width={110} height={110} className="mr-4" />
      </div>
      <p className="mb-4 text-sm text-primary">{dataFooter.footerLeft.title}</p>
      <p className="mb-4 text-sm text-primary">
        <strong>Địa chỉ đăng ký:</strong> {dataFooter.footerLeft.registerAddress}
      </p>
      <p className="mb-4 text-sm text-primary">
        <strong>Số điện thoại:</strong> {dataFooter.footerLeft.phones}
      </p>
      <p className="mb-6 text-sm text-primary">
        <strong>Email:</strong> {dataFooter.footerLeft.email}
      </p>

      <div className='flex gap-6 mb-8'>
        {dataFooter.footerLeft.socials.map((item) => {
            return (
                <>
                    <Image src={item.icon} width={30} height={30} className='w-[24px] h-[24px]' alt={item.name} />
                </>
            )
        })}
      </div>

      <div>
        <span className="bg-[#221F20] px-5 py-4 text-base font-semibold text-white rounded-tl-2xl rounded-br-2xl">
          HOTLINE: {dataFooter.footerLeft.hotline}
        </span>
      </div>
    </div>
  );
};

export default Left;
