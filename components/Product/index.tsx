'use client';

import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React, { memo, useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { ROUTER } from '@/utils/consts';
import { tranformCurrency } from '@/utils/tranform';
import { IProduct, IProductColor, IProductSize } from '@/types/product';

import Label from './components/Label';
import Colors from './components/Colors';
import ModalSize from './components/ModalSize';
import { useProductStore } from '@/hooks/useProductStore';

const { CiHeart, HiOutlineShoppingBag, BsBagX } = icons;
interface IProps {
  attributeProduct: IProduct;
}

const Product: React.FC<IProps> = ({ attributeProduct }) => {
  const [isShowSizeModal, setIsShowSizeModal] = useState(false);
  const [isShowImage, setIsShowImage] = useState(false);
  const [imageProduct, setImageProduct] = useState(attributeProduct?.colors[0]);
  const [colorActive, setColorActive] = useState<IProductColor | null>(null);
  const [listSizeByColor, setListSizeByColor] = useState<IProductSize[] | []>([]);
  const router = useRouter();
  const { addToCart } = useProductStore();

  useEffect(() => {
    const foundColorProduct = attributeProduct?.colors.find(item => item.id === colorActive?.id);
    if (foundColorProduct) {
      setImageProduct(foundColorProduct);
      const list = attributeProduct.listSizes.filter(item => item.colorId === foundColorProduct?.id);
      if (list) {
        setListSizeByColor(list);
      }
    }
  }, [colorActive]);

  return (
    <div className="relative ">
      <div className="w-full h-full" onClick={() => router.push(`${ROUTER.DETAIL_PRODUCT}/${attributeProduct.slug}`)}>
        <>
          <div onMouseLeave={() => setIsShowImage(false)} onMouseEnter={() => setIsShowImage(true)}>
            <Image
              src={imageProduct?.image?.imgProduct?.split(',')[0] ?? ''}
              width={330}
              height={500}
              alt="product"
              loading="lazy"
              className={classNames('w-full transition duration-700  ease-in-out cursor-pointer first:absolute', {
                'opacity-0': isShowImage,
              })}
            />
            <Image
              src={imageProduct?.image?.imgProduct.split(',')[1] ?? ''}
              width={330}
              height={500}
              alt="product"
              loading="lazy"
              className={classNames('w-full transition duration-700  ease-in-out cursor-pointer first:absolute', {
                'opacity-100': !isShowImage,
              })}
            />
          </div>
        </>
      </div>

      {/* label discount */}
      <span className="absolute pl-2 pr-3 py-[10px] font-semibold text-white bg-[#D73831] rounded-tl-full rounded-tr-full rounded-bl-full right-3 top-3">
        -70 <span className="absolute text-xs">%</span>
      </span>

      {attributeProduct.isNew && !attributeProduct.isBestSeller && (
        <Label title="NEW" color="bg-[#E7973E]" colorBadge="border-t-[#AC2E33]" />
      )}

      {attributeProduct.isBestSeller && (
        <Label title="Best Seller" color="bg-[#AC2E33]" colorBadge="border-t-[#D73831]" />
      )}

      <div>
        <div className="flex items-center justify-between mt-4">
          <Colors colorActive={colorActive} setColorActive={setColorActive} colors={attributeProduct?.colors} />
          <CiHeart size={24} className="cursor-pointer" />
        </div>

        <p className="mt-4 text-left text-primary">{attributeProduct?.title}</p>

        <div className="flex items-center justify-between mt-3">
          <p className="font-semibold text-[#3E3E3F] text-lg">
            {tranformCurrency(attributeProduct?.price)}đ
            <del className="text-xs text-[#A8A9AD] pl-1">{tranformCurrency(attributeProduct?.oldPrice)}đ</del>
          </p>
          <span
            onClick={() => {
              if (listSizeByColor.length > 0) {
                setIsShowSizeModal(!isShowSizeModal);
              }
            }}
            className={classNames(
              'relative px-3 py-2   transition border border-gray-700 rounded-tl-lg rounded-br-lg ',
              {
                'bg-white text-gray-800': isShowSizeModal,
                'bg-primaryDark text-white': !isShowSizeModal,
                'cursor-not-allowed': listSizeByColor.length <= 0,
                'cursor-pointer  hover:bg-white hover:text-gray-800': listSizeByColor.length > 0,
              },
            )}
          >
            {listSizeByColor.length > 0 ? <HiOutlineShoppingBag size={24} /> : <BsBagX size={24} />}

            {isShowSizeModal && (
              <ModalSize
                sizes={listSizeByColor}
                handleAddCard={item => {
                  colorActive && addToCart(attributeProduct, colorActive, item, 1);
                }}
              />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Product);
