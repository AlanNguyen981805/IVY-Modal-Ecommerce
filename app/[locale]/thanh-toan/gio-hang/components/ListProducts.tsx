import { Quantity } from '@/app/[locale]/san-pham/[slug]/components';
import icons from '@/utils/icons';
import Image from 'next/image';
import React from 'react';

const { RiDeleteBin6Line } = icons;
const ListProducts = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="table w-full">
        <thead className="mb-4 uppercase border-b">
          <tr className='mb-4'>
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
        <tbody className='mt-10'>
          <tr className="py-6 bg-white border-b">
            <th scope="row" className="flex gap-6 py-6">
              <Image
                src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/ae414863b1076ad51e4de4bb6dcaa748.jpg"
                width={150}
                height={150}
                alt=""
              />
              <div>
                <span className="block mb-6 font-medium text-left text-primary">Áo thun có cổ</span>
                <p className="font-light">
                  Màu sắc: Đen <span className="pl-4 ">Size: XXL</span>
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
                <Quantity showLabel={false} />
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full text-center">
                <span className="text-xl font-medium ">123.000đ</span>
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full ">
               <RiDeleteBin6Line size={28}  />
              </div>
            </td>
          </tr>
          <tr className="py-6 bg-white border-b">
            <th scope="row" className="flex gap-6 py-6">
              <Image
                src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/ae414863b1076ad51e4de4bb6dcaa748.jpg"
                width={150}
                height={150}
                alt=""
              />
              <div>
                <span className="block mb-6 font-medium text-left text-primary">Áo thun có cổ</span>
                <p className="font-light">
                  Màu sắc: Đen <span className="pl-4 ">Size: XXL</span>
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
                <Quantity showLabel={false} />
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full text-center">
                <span className="text-xl font-medium ">123.000đ</span>
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full ">
               <RiDeleteBin6Line size={28}  />
              </div>
            </td>
          </tr>
          <tr className="py-6 bg-white border-b">
            <th scope="row" className="flex gap-6 py-6">
              <Image
                src="https://pubcdn.ivymoda.com/files/product/thumab/400/2022/09/07/ae414863b1076ad51e4de4bb6dcaa748.jpg"
                width={150}
                height={150}
                alt=""
              />
              <div>
                <span className="block mb-6 font-medium text-left text-primary">Áo thun có cổ</span>
                <p className="font-light">
                  Màu sắc: Đen <span className="pl-4 ">Size: XXL</span>
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
                <Quantity showLabel={false} />
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full text-center">
                <span className="text-xl font-medium ">123.000đ</span>
              </div>
            </td>
            <td className="h-24 py-6">
              <div className="flex-col items-center h-full cursor-pointer">
               <RiDeleteBin6Line size={28} className='cursor-pointer'  />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ListProducts;
