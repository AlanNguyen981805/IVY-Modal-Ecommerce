import { Product } from '@/components';
import { dataSlideProducts } from '@/components/SlideProducts/data';
import React from 'react';
import Select from './Select';

const List = () => {
  return (
    <div className=''>
      <div className='flex justify-between my-6'>
        <span className='text-2xl font-semibold'>ESSENTIAL SWEATSUIT MEN</span>
        <Select />
      </div>
      <div className="grid grid-cols-4 gap-6">
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
        <div className='h-[560px]'>
        <Product itemProduct={dataSlideProducts.products[0]} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default List;
