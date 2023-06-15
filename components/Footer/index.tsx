import React from 'react';

import { FooterCenter, FooterLeft, FooterRight } from './components';
import { dataFooter } from './data.footer';

const Footer = () => {
  return (
    <>
      <div className="container flex pt-14">
        <div className='flex w-full'>
          <div className="w-3/12">
            <FooterLeft />
          </div>
          <div className="flex justify-between w-2/4 px-14">
            <FooterCenter />
          </div>
          <div className="w-3/12">
            <FooterRight />
          </div>
        </div>
      </div>
      <span className="block w-full py-6 mt-8 text-center border-t">{dataFooter.titleBottom}</span>
    </>
  );
};

export default Footer;
