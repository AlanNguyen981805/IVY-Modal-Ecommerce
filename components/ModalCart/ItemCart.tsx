import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Quantity } from '@/app/san-pham/[slug]/components';
import { ROUTER } from '@/utils/consts';

const ItemCart = () => {
  const router = useRouter()

  return (
    <div className="flex items-center w-full py-2 border-b">
      <div onClick={() => router.push(`${ROUTER.DETAIL_PRODUCT}/product-123`)}>
        <Image
          alt=""
          src={'https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/ae414863b1076ad51e4de4bb6dcaa748.jpg'}
          width={100}
          height={100}
        />
      </div>
      <div className="w-full pl-2">
        <span className='block pt-1 pb-3 text-lg'>Áo thun có cổ</span>
        <div className="flex ">
          <p className='text-primary'>
            Màu sắc: <span className='text-primaryDark'>Đen</span>
          </p>
          <p className='ml-4 text-primary'>
            Size: <span>XXL</span>
          </p>
        </div>
        <div className="flex items-center justify-between w-full pl-2">
          <Quantity
            classNameParent2="!w-[70px]"
            showLabel={false}
            classNameBtn1="!w-[30px] !right-12"
            classNameBtn2="!w-[30px] !left-12"
            classNameParent="!h-[30px]"
          />
          <span className="text-[#AC2F33] font-semibold">
            600.000<ins>đ</ins>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
