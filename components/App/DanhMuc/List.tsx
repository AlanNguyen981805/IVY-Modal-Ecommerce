'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';
import Product from '@/components/Product';
import { getProducts } from '@/services/product/product.api';

import Select from './Select';

interface IProps {
  slug: string;
  searchParams?: { [key: string]: string | string[] | undefined };
}
const List: React.FC<IProps> = ({ slug, searchParams }) => {
  
  const { data, isLoading } = useQuery({
    queryKey: ['products', { cate: slug, query: searchParams }],
    queryFn: () => getProducts(slug, searchParams),
    staleTime: 1000,
  });
  console.log('isLoading :>> ', isLoading);

  return (
    <div className="">
      <div className="flex justify-between my-6">
        <span className="text-2xl font-semibold">ESSENTIAL SWEATSUIT MEN</span>
        <Select />
      </div>
      <div className="grid grid-cols-4 gap-6">
        {data?.products.map(item => (
          <div className="h-auto" key={item.id}>
            <Product attributeProduct={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
