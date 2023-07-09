import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Quantity } from '@/components/App/SanPham';
import { ROUTER } from '@/utils/consts';
import { IProductCart } from '@/types/product';
import { useProductStore } from '@/hooks/useProductStore';
import { tranformCurrency } from '@/utils/tranform';

interface IProps {
  product: IProductCart;
}
const ItemCart: React.FC<IProps> = ({ product }) => {
  const router = useRouter();
  const { removeFromCart, addToCart, onMinus, onPlus } = useProductStore();
  return (
    <div className="flex items-center w-full py-2 border-b">
      <div onClick={() => router.push(`${ROUTER.DETAIL_PRODUCT}/product-123`)}>
        <Image alt="" src={product.image} width={100} height={100} />
      </div>
      <div className="w-full pl-2">
        <span className="block pt-1 pb-3 text-lg">{product.name}</span>
        <span className="pt-1 pb-3 text-lg text-right" onClick={() => removeFromCart(product.sku)}>
          Delete
        </span>
        <div className="flex ">
          <p className="text-primary">
            Màu sắc: <span className="text-primaryDark">{product.color.name}</span>
          </p>
          <p className="ml-4 text-primary">
            Size: <span>{product.size.name}</span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full pl-2">
          <Quantity
            onPlus={() => onPlus(product)}
            onMinus={() => onMinus(product)}
            quantity={product.quantity}
            numInStock={product?.size?.stock}
            classNameParent2="!w-[70px]"
            showLabel={false}
            classNameBtn1="!w-[30px] !right-12"
            classNameBtn2="!w-[30px] !left-12"
            classNameParent="!h-[30px]"
          />
          <span className="text-[#AC2F33] font-semibold">
            {tranformCurrency(product.totalPriceBySku)}
            <ins>đ</ins>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
