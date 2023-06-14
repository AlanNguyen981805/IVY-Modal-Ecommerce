import React from 'react';
import { dataFooter } from '../data.footer';
import Image from 'next/image';

const Right = () => {
  return (
    <>
      <div className="py-8 border-[6px] px-7 rounded-tl-[56px] rounded-br-[56px]">
        <span className="block w-3/5 mb-4 text-xl font-semibold">{dataFooter.footerRight.title}</span>
        <div className="flex">
          <input type="text" placeholder="nhập địa chỉ email" className="w-3/5 pb-4 text-sm border-b outline-none" />
          <button className="bg-white after:z-[-1] after:left-[30px] after:rounded-br-[24px] after:content-[''] after:top-1 after:border-[#b6b6b6] after:border-r after:border-t after:border-b relative after:w-3/4 after:h-[90%]  after:block after:absolute after:px-4 after:py-2 px-4 py-2 rounded-tl-[24px] rounded-br-[24px] text-primaryDark border ml-3 cursor-pointer hover:text-white transition ease-in-out hover:bg-primaryDark border-[#221F20]">
            Đăng ký
          </button>
        </div>
      </div>
      <div>
        <p className='pt-8 pb-6 text-2xl font-semibold'>Download App</p>
        <div className='flex gap-4'>
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
