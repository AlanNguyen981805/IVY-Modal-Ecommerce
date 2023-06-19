import classNames from 'classnames';
import icons from '@/utils/icons';
import ItemCart from './ItemCart';

const { RiCloseFill } = icons;
interface IProps {
  onClose: () => void;
  className?: any;
}
const ModalCart: React.FC<IProps> = ({ onClose, className }) => {
  return (
    <div
      className={classNames(
        'fixed top-0 w-full z-40 transition-all duration-700 right-0 max-w-[420px] bg-white border h-full shadow-md',
        className,
      )}
    >
      <div className="flex justify-between px-5 py-6 border-b">
        <h1 className="flex text-2xl font-semibold">
          Giỏ hàng{' '}
          <span className="flex items-center justify-center w-4 h-4 p-4 ml-2 text-base text-white rounded-full bg-primaryDark">
            1
          </span>
        </h1>
        <span className="transition duration-700 cursor-pointer hover:rotate-180" onClick={onClose}>
          <RiCloseFill size={30} />
        </span>
      </div>
      <div className="p-4 max-h-[65vh] overflow-y-auto">
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
        <ItemCart />
      </div>
      <p className="block px-4 pt-8 mb-4 text-sm text-right border-b">
        Tổng cộng: <span className="text-xl font-semibold">1.400.000đ</span>
      </p>
      <div className="mx-4">
        <button className="w-full mb-4 text-xl font-semibold text-center text-white transition-all duration-700 bg-black border h-14 hover:bg-white hover:text-primaryDark">
          XEM GIỎ HÀNG
        </button>
        <button className="w-full text-xl font-semibold text-center transition-all duration-700 border h-14 hover:bg-black hover:text-white">
          ĐĂNG NHẬP
        </button>
      </div>
    </div>
  );
};

export default ModalCart;
