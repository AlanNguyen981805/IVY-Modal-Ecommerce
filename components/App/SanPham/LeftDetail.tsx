"use client"
import React, { useMemo } from 'react';
import SliderLeft from './SlideLeft';
import { IProduct } from '@/types/product';

interface IProps {
  product: IProduct;
}
const LeftDetail: React.FC<IProps> = ({ product }) => {
   
   const listImage: any[] = useMemo(() => {
    return product.colors.map((item) => item?.image?.imgProduct.trim().split(','))
   }, [product])

  return (
    <div>
      {listImage?.flat() && (
      <SliderLeft images={listImage?.flat()} />
      )}
    </div>
  );
};

export default LeftDetail;
