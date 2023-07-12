'use client';

import React, { memo, useState } from 'react';

import Colors from '@/components/Product/components/Colors';
import { Accordion, CustomButton, RangeSlider, Select, Sizes } from '@/components';
import useQueryParams from '@/hooks/useQueryParams';
import { INameCode } from '@/types/common';

import { dataFilter } from './data.filter';

interface IProps {
  colors: INameCode[];
  sizes: INameCode[];
}
const Filter: React.FC<IProps> = ({ colors, sizes }) => {
  const [listColors, setColors] = useState<string>('');
  const [listSizes, setListSize] = useState('');
  const [prices, setPrices] = useState({ minPrice: 0, maxPrice: 0 });
  const { setQueryParams, urlSearchParams } = useQueryParams();

  const handleFilter = () => {
    setQueryParams({ listColors, listSizes, minPrice: prices.minPrice, maxPrice: prices.maxPrice });
  };

  const getSizesActived = (query: 'listSizes' | 'listColors') => {
    const selectedIds = urlSearchParams
      ?.get(query)
      ?.split(',')
      .map(id => id.trim());
    const selectedItems =
      query === 'listSizes'
        ? sizes.filter(item => selectedIds?.includes(item.id))
        : colors.filter(item => selectedIds?.includes(item.id));
    return selectedItems;
  };

  const handleReset = () => {
    setQueryParams(null);
  };
  return (
    <div>
      <div className="container mx-auto mt-4">
        <Accordion title="Size" isShow={getSizesActived('listSizes').length > 0 ? true : false}>
          <Sizes
            dataActived={getSizesActived('listSizes')}
            sizes={sizes}
            onMultiChange={values => {
              const listSizes = values.map(item => item.id);
              setListSize(listSizes.join(','));
            }}
            isMultiSelected
          />
        </Accordion>
        <Accordion title="Màu sắc" isShow={getSizesActived('listColors').length > 0 ? true : false}>
          <div className="pt-4">
            <Colors
              dataActived={getSizesActived('listColors')}
              colors={colors}
              isMultiSelected={true}
              onChangeMultiColor={values => {
                const listColor = values.map(item => item.id);
                setColors(listColor.join(','));
              }}
            />
          </div>
        </Accordion>
        <Accordion
          title="Mức giá"
          isShow={Number(urlSearchParams.get('minPrice')) && Number(urlSearchParams.get('maxPrice')) ? true : false}
        >
          <div className="py-6">
            <RangeSlider
              onChange={value => setPrices({ minPrice: value.minValue, maxPrice: value.maxValue })}
              initialMin={Number(urlSearchParams.get('minPrice')) || 0}
              initialMax={Number(urlSearchParams.get('maxPrice')) || 10000000}
              min={0}
              max={10000000}
              step={100}
              priceCap={1000}
            />
          </div>
        </Accordion>
        <Accordion title="Mức chiết khấu">
          <div className="py-6">
            <Select data={dataFilter.discount} onChange={value => console.log(value)} />
          </div>
        </Accordion>
        <div className="flex justify-center gap-10 mt-4">
          <CustomButton title="Bỏ Lọc" className="py-3 px-5 !rounded-tl-2xl !rounded-br-2xl" onClick={handleReset} />
          <CustomButton
            title="Lọc"
            isBgBlack
            className="py-3 px-5 !rounded-tl-2xl !rounded-br-2xl "
            onClick={handleFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Filter);
