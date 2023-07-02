import { CustomButton } from '@/components';
import ListProducts from './ListProducts';
import Process from '../Process';

const Left = () => {
  return (
    <div>
      <Process />
      <p className="pt-6 pb-8 text-2xl font-bold text-primaryDark">
        Giỏ hàng của bạn có <span className="text-[#d73831]">6 sản phẩm</span>
      </p>
      <ListProducts />
      <CustomButton title='<- Tiếp tục mua hàng' className='px-8 py-4 mt-8' />
    </div>
  );
};

export default Left;
