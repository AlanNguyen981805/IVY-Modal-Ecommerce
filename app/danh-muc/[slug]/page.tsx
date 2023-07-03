import React from 'react';

import { Breadcrumb } from '@/components';
import Filter from '@/components/App/DanhMuc/Filter';
import List from '@/components/App/DanhMuc/List';
import { getProductsByCate } from '@/services/product/product.api';

interface IProps {
  params: {
    slug: string
  }
}
const Page =async ({ params: { slug } }: IProps) => {
  const listProductsByCate = await getProductsByCate(slug)

  return (
    <div>
      <Breadcrumb />
      <h1>{slug}</h1>
      <div className="flex w-full">
        <div className="w-3/12">
          <Filter />
        </div>
        <div className="w-3/4 ml-10">
          <List listProductsByCate={listProductsByCate} />
        </div>
      </div>
    </div>
  );
};

export default Page;
