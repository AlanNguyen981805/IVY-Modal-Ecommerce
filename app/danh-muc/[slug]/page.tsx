import React from 'react';

import { Breadcrumb } from '@/components';
import Filter from '@/components/App/DanhMuc/Filter';
import List from '@/components/App/DanhMuc/List';
import { getProducts } from '@/services/product/product.api';
import { getColors, getSizes } from '@/services/common/common.api';
import Hydrate from '@/utils/react-query/hydrate.client';
import getQueryClient from '@/utils/react-query/getQueryClient';
import { dehydrate } from '@tanstack/react-query';

interface IProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}
const Page = async ({ params: { slug }, searchParams }: IProps) => {
  const listColors = await getColors();
  const listSizes = await getSizes();
  const queryClient = getQueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ['products', { cate: slug, query: searchParams }],
    queryFn: () => getProducts(slug, searchParams),
    staleTime: 1000,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <div>
      <Breadcrumb />
      <div className="flex w-full">
        <div className="w-3/12">
          <Filter colors={listColors} sizes={listSizes} />
        </div>
        <div className="w-3/4 ml-10">
          <Hydrate state={dehydratedState}>
            <List slug={slug} searchParams={searchParams} />
          </Hydrate>
        </div>
      </div>
    </div>
  );
};

export default Page;
