/* eslint-disable @next/next/no-img-element */

import React from 'react';
import Link from 'next/link';

import { ROUTER } from '@/utils/consts';

import { Logo } from '../data.header';

const HeaderCenter = () => {
  return (
    <Link href={`${ROUTER.HOME}`}>
      <img alt="logo" src={Logo} className=" 2xl:w-[206px] md:w-[140px] cursor-pointer" />
    </Link>
  );
};

export default HeaderCenter;
