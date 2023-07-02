'use client';

import React from 'react';

import Colors from '@/components/Product/components/Colors';
import { Accordion, CustomButton, RangeSlider, Select, Sizes } from '@/components';

import { dataFilter } from './data.filter';

const Filter = () => {
  return (
    <div>
      <div className="container mx-auto mt-4">
        <Accordion title="Size">
          <Sizes sizes={['L', 'XL', 'XXL']} onChange={value => console.log(value)} />
        </Accordion>
        <Accordion title="Màu sắc">
          <div className="pt-4">
            <Colors colors={[{ code: '#ddd', id: '1' }]} colorActive="1" setColorActive={() => console.log()} />
          </div>
        </Accordion>
        <Accordion title="Mức giá">
          <div className='py-6'>
            <RangeSlider initialMin={0} initialMax={10000000} min={0} max={10000000} step={100} priceCap={1000} />
          </div>
        </Accordion>
        <Accordion title="Mức chiết khấu">
          <div className='py-6'><Select data={dataFilter.discount} onChange={value => console.log(value)} /></div>
        </Accordion>
        <div className="flex justify-center gap-10 mt-4">
          <CustomButton title="Bỏ Lọc" className="py-3 px-5 !rounded-tl-2xl !rounded-br-2xl" />
          <CustomButton title="Lọc" isBgBlack className="py-3 px-5 !rounded-tl-2xl !rounded-br-2xl " />
        </div>
      </div>
    </div>
  );
};

export default Filter;
