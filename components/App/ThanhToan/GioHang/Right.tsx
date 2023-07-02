import { CustomButton } from '@/components';
import { ROUTER } from '@/utils/consts';
import icons from '@/utils/icons';
import Link from 'next/link';
import React from 'react';

const { BsFillCheckCircleFill, CiCircleAlert } = icons;
const Right = () => {
  return (
    <>
      <div className="ml-8">
        <div className="px-6 py-8 rounded-md bg-gray-100/70">
          <h3 className="mb-4 text-2xl font-medium">Tổng tiền giỏ hàng</h3>
          <div className="flex justify-between mb-4 text-base">
            <span>Tổng sản phẩm</span>
            <span>5</span>
          </div>
          <div className="flex justify-between mb-4 text-base">
            <span className="text-sm">Tổng tiền hàng</span>
            <span>3.459.000đ</span>
          </div>
          <div className="flex justify-between mb-6 text-base">
            <span className="text-sm">Thành tiền</span>
            <span className="font-semibold">3.459.000đ</span>
          </div>
          <div className="flex justify-between mb-6 text-base">
            <span className="text-sm">Tạm tính</span>
            <span className="text-xl font-semibold">3.459.000đ</span>
          </div>

          <div className="flex items-center text-[#AC2F33] mb-4">
            <CiCircleAlert size={24} color="#AC2F33" className="mr-2" />
            <span>
              Miễn <b>đổi trả</b> đối với sản phẩm đồng giá / sale trên 50%
            </span>
          </div>
          <div className="flex items-center text-[#28a745]">
            <BsFillCheckCircleFill size={20} color="#28a745" className="mr-2" />
            <span>Đơn hàng của bạn được miễn phí ship</span>
          </div>

          <div className="mt-10 mb-2 border "></div>
        </div>
        <Link href={ROUTER.PAYMENT.ORDER}>
          <CustomButton title="ĐẶT HÀNG" isBgBlack className="w-full py-4 text-xl font-semibold" />
        </Link>
      </div>
    </>
  );
};

export default Right;
