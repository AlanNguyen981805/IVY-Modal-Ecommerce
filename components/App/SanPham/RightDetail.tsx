'use client';

import React, { useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { CustomButton, Sizes } from '@/components';
import Colors from '@/components/Product/components/Colors';
import { IProduct, IProductColor, IProductSize } from '@/types/product';
import { tranformCurrency } from '@/utils/tranform';

import { Quantity, Tabs } from './index';
import { useProductStore } from '@/hooks/useProductStore';

const { AiFillStar, AiOutlineHeart } = icons;
interface IProps {
  product: IProduct;
}
const RightDetail: React.FC<IProps> = ({ product }) => {
  const [colorActive, setColorActive] = useState<IProductColor | null>(null);
  const [sizeActive, setSizeActive] = useState<IProductSize | null>(null);
  const [quantity, setQuantity] = useState(0)
  const { addToCart } = useProductStore();

  useEffect(() => {
    console.log(colorActive);
  }, [colorActive]);
  return (
    <div className="ml-8">
      <span className="text-3xl font-semibold text-primaryDark">{product.title.toUpperCase()}</span>
      <div className="flex items-center text-[#6c6d70] mt-3">
        <span>{product.sku}</span>
        <span className="flex pl-10 pr-4">
          {Array.from(Array(product.star)).map(item => (
            <AiFillStar size={20} className="text-yellow-400" key={item} />
          ))}
        </span>
        <span>(0 đánh giá)</span>
      </div>

      <p className="mt-6 text-2xl font-semibold text-primaryDark">
        {tranformCurrency(product.price)}
        <del className="pl-2 text-lg font-medium text-primary">{tranformCurrency(product.oldPrice)}</del>
      </p>

      <p className="mt-6 mb-6 text-xl font-semibold">Màu sắc: {colorActive?.name}</p>

      <Colors setColorActive={setColorActive} colorActive={colorActive} colors={product.colors} />

      <Sizes
        sizes={product?.sizes?.filter(item => item.stock.colorId === colorActive?.id)}
        isShowCheckSize
        isMultiSelected={false}
        onChange={value => {
          setSizeActive(value);
        }}
      />

      <Quantity numInStock={sizeActive?.stock?.quantity || 0} setQuantity={setQuantity}  />

      <div className="flex gap-3 mt-6">
        <CustomButton
          title="Thêm vào giỏ"
          className="px-8 py-4 ml-0 font-semibold"
          isBgBlack
          onClick={() => colorActive && sizeActive && addToCart(product, colorActive, sizeActive, 4)}
        />
        <CustomButton title="Mua hàng" className="px-8 py-4 font-semibold" />
        <CustomButton title={(<AiOutlineHeart size={24} />) as unknown as string} />
      </div>
      <p className="mt-3 mb-16 underline text-primary">Tìm tại cửa hàng</p>

      <Tabs description={product.description} intro={product.intro} preserve={product.preserve} />
    </div>
  );
};

export default RightDetail;
