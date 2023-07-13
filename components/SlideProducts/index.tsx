import { memo } from 'react';

import { getProductsByCate } from '@/services/product/product.api';
import { ISubCate } from '@/types/settings';
import getQueryClient from '@/utils/react-query/getQueryClient';
import Hydrate from '@/utils/react-query/hydrate.client';
import { dehydrate } from '@tanstack/react-query';

import ListProduct from './ListProduct';
interface IProps {
  title?: string;
  categories: ISubCate[];
  isViewAll?: boolean;
  cate: string;
}

const SlideProducts: React.FC<IProps> = async ({ title, categories, isViewAll = true, cate }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['slide-products', { cate }],
    queryFn: () => getProductsByCate(cate),
    staleTime: 1000,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="my-10">
      <Hydrate state={dehydrateState}>
        <ListProduct categories={categories} title={title || ''} cate={cate} />
      </Hydrate>

      {isViewAll && (
        <div className="flex justify-center mt-6">
          <button className="text-center bg-white after:z-[-1] after:left-[30px] after:rounded-br-[24px] after:content-[''] after:top-1 after:border-[#b6b6b6] after:border-r after:border-t after:border-b relative after:w-4/5 after:h-[90%]  after:block after:absolute after:px-4 after:py-2 px-4 py-2 rounded-tl-[24px] rounded-br-[24px] text-primaryDark border ml-3 cursor-pointer hover:text-white transition ease-in-out hover:bg-primaryDark border-[#221F20]">
            Xem tất cả
          </button>
        </div>
      )}
    </div>
  );
};

export default memo(SlideProducts);
