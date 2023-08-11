import { memo } from 'react';

import { getProductsByCate } from '@/services/product/product.api';
import { ISubCate } from '@/types/settings';
import getQueryClient from '@/utils/react-query/getQueryClient';
import Hydrate from '@/utils/react-query/hydrate.client';
import { dehydrate } from '@tanstack/react-query';

import ListProduct from './ListProduct';
import CustomButton from '../Button';
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
          <CustomButton title='Xem tất cả' className='px-6 py-3 after:w-4/5 after:top-[3px] after:left-[35px] bg-white after:-z-10' isStyleBefore />
        </div>
      )}
    </div>
  );
};

export default memo(SlideProducts);
