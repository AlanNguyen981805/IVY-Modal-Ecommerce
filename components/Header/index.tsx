import React from 'react';

import { HeaderCenter, HeaderLeft, HeaderRight } from './components';
import { getCategories } from '@/services/category/category.api';

const Header = async () => {
  const categories = await getCategories()

  return (
    <div className="fixed top-0 z-30 w-full">
      <div className="container flex">
        <div className="h-[80px]  flex items-center w-full  border-b bg-white">
          <div className="w-2/5">
            <HeaderLeft categories={categories} />
          </div>
          <div className="w-1/5">
            <HeaderCenter />
          </div>
          <div className="flex justify-end w-2/5">
            <HeaderRight placeholderInput={'tìm kiếm sản phẩm'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
