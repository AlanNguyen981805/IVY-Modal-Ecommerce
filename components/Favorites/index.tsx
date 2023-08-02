'use client';

import { getListFavoritesProduct } from '@/services/product/product.api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Product from '../Product';

const ListFavorites = () => {
  const { data } = useQuery({
    queryKey: ['favorites'],
    queryFn: () => getListFavoritesProduct(),
    staleTime: 1000,
  });

  console.log('data :>> ', data);

  return (
    <div className="grid grid-cols-4 gap-6">
      {data?.map((item: any) => (
        <div className="h-auto" key={item.product.id}>
          <Product attributeProduct={item.product} />
        </div>
      ))}
    </div>
  );
};

export default ListFavorites;
