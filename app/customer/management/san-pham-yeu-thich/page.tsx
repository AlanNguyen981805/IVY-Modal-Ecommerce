import { ListFavorites } from '@/components';
import { getListFavoritesProduct } from '@/services/product/product.api';
import getQueryClient from '@/utils/react-query/getQueryClient';
import Hydrate from '@/utils/react-query/hydrate.client';
import { dehydrate } from '@tanstack/react-query';
import React from 'react';

const Page = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['favorites'],
    queryFn: () => getListFavoritesProduct(),
    staleTime: 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <h3 className='mb-4 text-2xl font-semibold'>Sản phẩm yêu thích</h3>
      <Hydrate state={dehydratedState}>
        <ListFavorites />
      </Hydrate>
    </div>
  );
};

export default Page;
