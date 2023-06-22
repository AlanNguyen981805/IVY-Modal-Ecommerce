import React from 'react';

import { Breadcrumb, SlideProducts } from '@/components';
import { dataSlideProducts } from '@/components/SlideProducts/data';

import { LeftDetail, RightDetail } from './components';

const DetailProduct = () => {
  return (
    <>
      <Breadcrumb />
      <div className="flex w-full mt-8">
        <div className="w-[45%]">
          <LeftDetail />
        </div>
        <div className="w-[55%] pl-24">
          <RightDetail />
        </div>
      </div>
      <div className="mt-4">
        <SlideProducts isViewAll={false} listProducts={dataSlideProducts.products} title="Sản phẩm tương tự" />
      </div>
      <div className="mt-4">
        <SlideProducts isViewAll={false} listProducts={dataSlideProducts.products} title="Sản phẩm đã xem" />
      </div>
    </>
  );
};

export default DetailProduct;
