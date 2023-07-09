import React from 'react';

import { Breadcrumb, SlideProducts } from '@/components';
import { LeftDetail, RightDetail } from '@/components/App/SanPham';
import { getDetailProduct } from '@/services/product/product.api';

interface IProps {
  params: {
    slug: string;
  };
}
const DetailProduct: React.FC<IProps> = async ({ params: {slug} }) => {
  const detailProduct = await getDetailProduct(slug)
  return (
    <>
      <Breadcrumb />
      <div className="flex w-full mt-8">
        <div className="w-[45%]">
          <LeftDetail product={detailProduct} />
        </div>
        <div className="w-[55%] pl-24">
          <RightDetail product={detailProduct} />
        </div>
      </div>
      <div className="mt-4">
        <SlideProducts isViewAll={false} cate={detailProduct.cateId} title="Sản phẩm tương tự" categories={[]} />
      </div>
      {/* <div className="mt-4">
        <SlideProducts isViewAll={false} title="Sản phẩm đã xem" categories={[]} />
      </div> */}
    </>
  );
};

export default DetailProduct;
