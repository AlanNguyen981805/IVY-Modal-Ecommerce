import React from 'react';
import { useTranslations } from 'next-intl';

import { HeaderCenter, HeaderLeft, HeaderRight } from './components';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <div className="fixed left-0 z-30 flex w-full">
      <div className="h-[80px]  flex items-center w-full  border-b mx-16  top-0 bg-white">
        <div className="w-3/6">
          <HeaderLeft />
        </div>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <HeaderCenter />
        </div>
        <div className="flex justify-end w-3/6">
          <HeaderRight placeholderInput={t('searchProducts')} />
        </div>
      </div>
    </div>
  );
};

export default Header;