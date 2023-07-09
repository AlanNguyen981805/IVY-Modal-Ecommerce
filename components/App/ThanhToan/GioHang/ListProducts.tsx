'use client';

import { Quantity } from '@/components/App/SanPham';
import { useProductStore } from '@/hooks/useProductStore';
import icons from '@/utils/icons';
import { tranformCurrency } from '@/utils/tranform';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const { RiDeleteBin6Line } = icons;
const ListProducts = () => {
  const { products, onMinus, onPlus } = useProductStore();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;
  return (
    <div className="relative overflow-x-auto">
      <table className="table w-full">
        <thead className="mb-4 uppercase border-b">
          <tr className="mb-4">
            <th scope="col" className="py-6 text-sm font-semibold text-left text-primary">
              Tên sản phẩm
            </th>
            <th scope="col" className="px-6 py-6 text-sm font-semibold text-center text-primary">
              Chiết khấu
            </th>
            <th scope="col" className="px-6 py-6 text-sm font-semibold text-primary">
              Số lượng
            </th>
            <th scope="col" className="px-6 py-6 text-sm font-semibold text-primary">
              Tổng tiền
            </th>
            <th scope="col" className="px-6 py-6 text-sm font-semibold text-primary"></th>
          </tr>
        </thead>
        <tbody className="mt-10">
          {products.length > 0 &&
            products.map(item => (
              <tr key={item.id} className="py-6 bg-white border-b">
                <th scope="row" className="flex gap-6 py-6">
                  <Image src={item?.image} width={150} height={150} alt="" />
                  <div>
                    <span className="block mb-6 font-medium text-left text-primary">{item?.name}</span>
                    <p className="font-light">
                      Màu sắc: {item.color.name} <span className="pl-4 ">Size: {item.size.name}</span>
                    </p>
                  </div>
                </th>
                <td className="h-24 py-6">
                  <div className="flex flex-col items-center h-full text-base">
                    <span>-207.000đ</span>
                    <p className="font-bold text-sm text-[#d73831]">( -30% )</p>
                  </div>
                </td>
                <td className="h-24">
                  <div className="flex flex-col items-center h-full ">
                    <Quantity
                      showLabel={false}
                      onMinus={() => onMinus(item)}
                      onPlus={() => onPlus(item)}
                      numInStock={item.size.stock}
                      quantity={item.quantity}
                    />
                  </div>
                </td>
                <td className="h-24 py-6">
                  <div className="flex-col items-center h-full text-center">
                    <span className="text-xl font-medium ">{tranformCurrency(item.totalPriceBySku)}đ</span>
                  </div>
                </td>
                <td className="h-24 py-6">
                  <div className="flex-col items-center h-full ">
                    <RiDeleteBin6Line size={28} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
