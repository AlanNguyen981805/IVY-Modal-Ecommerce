import InfoCustomer from '@/components/App/Info';
import React from 'react';

const Page = () => {
  return (
    <div className="md:ml-16 2xl:ml-20">
      <h3 className="mb-8 text-2xl font-semibold">TÀI KHOẢN CỦA TÔI</h3>

      <span className="p-4 bg-blue-200 border rounded-md text-[#004085]">
        {
          'Vì chính sách an toàn thẻ, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng liên hệ CSKH 0905898683 để được hỗ trợ'
        }
      </span>
      <InfoCustomer />
    </div>
  );
};

export default Page;
