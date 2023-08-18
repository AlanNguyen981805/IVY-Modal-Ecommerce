import { GioHangRight, GioHangLeft } from '@/components/App/ThanhToan/GioHang';

const GioHang = () => {
  return (
    <>
      <div className="flex mt-28">
        <div className="w-3/5">
          <GioHangLeft />
        </div>
        <div className="w-2/5">
          <GioHangRight />
        </div>
      </div>
    </>
  );
};

export default GioHang;
