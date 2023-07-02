import React from 'react';

import { Breadcrumb, SlideProducts } from '@/components';
import { LeftDetail, RightDetail } from '@/components/App/SanPham';

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
        <SlideProducts isViewAll={false} title="Sản phẩm tương tự" categories={[]} />
      </div>
      <div className="mt-4">
        <SlideProducts isViewAll={false} title="Sản phẩm đã xem" categories={[]} />
      </div>
    </>
  );
};

export default DetailProduct;
