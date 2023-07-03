'use client';

import React from 'react';
import Select from './Select';
import { useQuery } from '@tanstack/react-query';
import Product from '@/components/Product';
import { IResponseProductByCate } from '@/types/product';

interface IProps {
  listProductsByCate: IResponseProductByCate;
}
const List: React.FC<IProps> = async ({ listProductsByCate }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['products-by-cate'],
    initialData: listProductsByCate,
  });
  return (
    <div className="">
      <div className="flex justify-between my-6">
        <span className="text-2xl font-semibold">ESSENTIAL SWEATSUIT MEN</span>
        <Select />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {data.products.length > 0 &&
          data.products.map(item => (
            <div className="h-[560px]" key={item.id}>
              <Product attributeProduct={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
