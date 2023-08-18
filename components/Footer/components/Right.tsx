import React from 'react';
import { dataFooter } from '../data.footer';
import Image from 'next/image';
import { CustomButton } from '@/components';

const Right = () => {
  return (
    <>
      <div className="py-8 border-[6px] px-7 rounded-tl-[56px] rounded-br-[56px]">
        <span className="block w-3/5 mb-4 text-xl font-semibold">{dataFooter.footerRight.title}</span>
        <div className="flex">
          <input type="text" placeholder="nhập địa chỉ email" className="w-3/5 pb-4 text-sm border-b outline-none" />
          <CustomButton title="Đăng ký " isStyleBefore className='ml-3' />
        </div>
      </div>
      <div>
        <p className="pt-8 pb-6 text-2xl font-semibold">Download App</p>
        <div className="flex gap-4">
          {dataFooter.footerRight.apps.map((item, index) => {
            return (
              <>
                <Image src={item.img} alt={item.name} key={index} width={180} height={52} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Right;
