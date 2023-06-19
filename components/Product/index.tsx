'use client';

import Image from 'next/image';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { tranformCurrency } from '@/utils/tranform';

import Label from './components/Label';
import Colors from './components/Colors';
import ModalSize from './components/ModalSize';

const { CiHeart, HiOutlineShoppingBag } = icons;
interface IProps {
  itemProduct: any;
}

const Product: React.FC<IProps> = ({ itemProduct }) => {
  const [isShowSizeModal, setIsShowSizeModal] = useState(false);
  const [imageProduct, setImageProduct] = useState(itemProduct.images[0]);
  const [imgShow, setImgShow] = useState(imageProduct?.img?.[0]);
  const [colorActive, setColorActive] = useState('1');

  useEffect(() => {
    const products = itemProduct.images.find((item: any) => item.idColor === colorActive);
    if (products) {
      setImageProduct(products);
      setImgShow(products.img[0]);
    }
  }, [colorActive]);

  return (
    <div className="relative ">
      <div className="w-full h-full ">
        {imageProduct?.img?.map((item: any) => {
          return (
            <Image
              onMouseLeave={() => setImgShow(imageProduct?.img[0])}
              onMouseEnter={() => setImgShow(imageProduct?.img[1])}
              key={item}
              src={imgShow}
              width={330}
              height={500}
              alt="product"
              className="w-full cursor-pointer first:absolute"
            />
          );
        })}
      </div>

      {/* label discount */}
      <span className="absolute pl-2 pr-3 py-[10px] font-semibold text-white bg-[#D73831] rounded-tl-full rounded-tr-full rounded-bl-full right-3 top-3">
        -70 <span className="absolute text-xs">%</span>
      </span>

      <Label title="NEW" color="bg-[#E7973E]" colorBadge="border-t-[#AC2E33]" />

      {/* <Label title="Best Seller" color="bg-[#AC2E33]" colorBadge="border-t-[#D73831]" /> */}

      <div>
        <div className="flex items-center justify-between mt-4">
          <Colors colorActive={colorActive} setColorActive={setColorActive} colors={itemProduct.colors} />
          <CiHeart size={24} className="cursor-pointer" />
        </div>

        <p className="mt-4 text-left text-primary">{itemProduct.title}</p>

        <div className="flex items-center justify-between mt-3">
          <p className="font-semibold text-[#3E3E3F] text-lg">
            {tranformCurrency(itemProduct.price)}đ
            <del className="text-xs text-[#A8A9AD] pl-1">{tranformCurrency(itemProduct.oldPrice)}đ</del>
          </p>
          <span
            onClick={() => setIsShowSizeModal(!isShowSizeModal)}
            className={classNames("relative px-3 py-2  transition border border-gray-700 rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-white hover:text-gray-800", {
              'bg-white text-gray-800': isShowSizeModal,
              'bg-primaryDark text-white': !isShowSizeModal
            })}
          >
            <HiOutlineShoppingBag size={24} />
            {isShowSizeModal && <ModalSize sizes={['S', 'M', 'L', 'XL']} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
