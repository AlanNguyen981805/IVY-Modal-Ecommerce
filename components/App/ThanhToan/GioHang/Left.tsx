'use client';

import { CustomButton } from '@/components';
import { useProductStore } from '@/hooks';

import Process from '../Process';
import { useEffect, useState } from 'react';
import { ListProducts } from '.';

const Left = () => {
  const { products } = useProductStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div>
      <Process />
      <p className="pt-6 pb-8 text-2xl font-bold text-primaryDark">
        Giỏ hàng của bạn có <span className="text-[#d73831]">{hydrated && products.length} sản phẩm</span>
      </p>
      <ListProducts />
      <CustomButton title="<- Tiếp tục mua hàng" className="px-8 py-4 mt-8" />
    </div>
  );
};

export default Left;
