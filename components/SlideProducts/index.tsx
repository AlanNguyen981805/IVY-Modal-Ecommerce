'use client';

import { Carosousel } from '@/core/Carosel';
// import Carousel from '@/core/Carosel';

import Product from '../Product';
import classNames from 'classnames';
import { useState } from 'react';

interface IProps {
  title?: string;
  categories?: string[];
  listProducts: any[];
  isViewAll?: boolean;
}

const SlideProducts: React.FC<IProps> = ({ title, categories, listProducts, isViewAll = true }) => {
  const [cateActive, setCateActive] = useState(categories?.[0]);
  return (
    <div className="my-10">
      <div className="flex flex-col items-center">
        {title && <p className="mt-2 mb-5 text-3xl font-semibold">{title.toUpperCase()}</p>}
        {categories && categories.length > 0 && (
          <ul className="flex gap-10 mb-5">
            {categories.map(item => (
              <li
                key={item}
                onClick={() => setCateActive(item)}
                className={classNames(
                  'mb-2 text-xl transition border-black cursor-pointer hover:border-b-2 text-primary',
                  {
                    'border-b-2': item === cateActive,
                  },
                )}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Carosousel>
        {listProducts?.length > 0 &&
          listProducts.map((item, index) => (
            <div key={index} className="relative !overflow-visible text-center snap-start keen-slider__slide">
              <Product key={index} itemProduct={item} />
            </div>
          ))}
      </Carosousel>

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

export default SlideProducts;
