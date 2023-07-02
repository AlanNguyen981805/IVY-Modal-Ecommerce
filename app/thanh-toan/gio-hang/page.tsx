import React from 'react';
import Right from '@/components/App/ThanhToan/GioHang/Right';
import Left from '@/components/App/ThanhToan/GioHang/Left';

const GioHang = () => {
  return (
    <>
      <div className="flex mt-28">
        <div className="w-3/5">
          <Left />
        </div>
        <div className="w-2/5">
          <Right />
        </div>
      </div>
    </>
  );
};

export default GioHang;
