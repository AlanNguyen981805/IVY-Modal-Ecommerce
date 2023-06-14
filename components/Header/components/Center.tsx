/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { Logo } from '../data.header';

const HeaderCenter = () => {
  return (
    <div>
      <img alt="logo" src={Logo} className=" 2xl:w-[206px] md:w-[140px] cursor-pointer" />
    </div>
  );
};

export default HeaderCenter;
