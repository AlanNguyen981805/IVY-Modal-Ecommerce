'use client';

import classNames from 'classnames';
import React, { memo, useState } from 'react';

import { ISubCate } from '@/types/settings';
import { Carosousel } from '@/core/Carosel';
import { getProductsByCate } from '@/services/product/product.api';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import Product from '../Product';

interface IProps {
  categories: ISubCate[];
  title: string;
  cate?: string;
}
const ListProduct: React.FC<IProps> = ({ categories, title, cate }) => {
  const [cateActive, setCateActive] = useState(categories?.[0]?.query || cate || '');
  const queryClient = useQueryClient();
  const TIME_TO_REFRESH = 1000;

  const { data } = useQuery({
    queryKey: ['slide-products', { cate: cateActive }],
    queryFn: () => getProductsByCate(cateActive),
  });

  return (
    <>
      <div className="flex flex-col items-center">
        {title && <p className="mt-2 mb-5 text-3xl font-semibold">{title.toUpperCase()}</p>}
        {categories && categories?.length > 0 && (
          <ul className="flex gap-10 mb-5">
            {categories.map((item: any) => (
              <li
                key={item}
                onClick={() => {
                  queryClient.prefetchQuery(['products', item.query], {
                    queryFn: () => getProductsByCate(item.query),
                    staleTime: TIME_TO_REFRESH,
                  });
                  setCateActive(item.query);
                }}
                className={classNames(
                  'mb-2 text-xl transition border-black cursor-pointer hover:border-b-2 text-primary',
                  {
                    'border-b-2': item.query === cateActive,
                  },
                )}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Carosousel>
        {' '}
        /
        {data?.map(item => (
          <div key={item.id} className="relative !overflow-visible text-center snap-start keen-slider__slide">
            <Product attributeProduct={item} />
          </div>
        ))}
      </Carosousel>
    </>
  );
};

export default memo(ListProduct);
