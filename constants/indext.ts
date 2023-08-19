import { useStoreAuth } from '@/hooks';
import { IPaymentMethods } from '@/types/checkout';
import { IMenuHeaderRight } from '@/types/menu';
import { ROUTER } from '@/utils/consts';
import icons from '@/utils/icons';
import Cookies from 'js-cookie';

const {
  CiSearch,
  HiOutlineShoppingBag,
  BsHeadphones,
  AiOutlineUser,
  BiPhoneCall,
  BsChatDots,
  TfiReload,
  TfiEmail,
  FaPaw,
} = icons;
export const MenuCustomer: IMenuHeaderRight[] = [
  {
    title: 'Thông tin tài khoản',
    icon: BiPhoneCall,
    link: ROUTER.CUSTOMER.THONG_TIN_TAI_KHOAN,
  },
  {
    title: 'Quản lý đơn hàng',
    icon: BiPhoneCall,
    link: ROUTER.CUSTOMER.QUAN_LY_DON_HANG,
  },
  {
    title: 'Sổ địa chỉ',
    icon: BiPhoneCall,
    link: '',
  },
  {
    title: 'Sản phẩm đã xem',
    icon: BiPhoneCall,
    link: '',
  },
  {
    title: 'Sản phẩm yêu thích',
    icon: BiPhoneCall,
    link: ROUTER.CUSTOMER.SAN_PHAM_YEU_THICH,
  },
  {
    title: 'Hỏi đáp sản phẩm',
    icon: BiPhoneCall,
    link: '',
  },
  {
    title: 'Hỗ trợ - IVY',
    icon: BiPhoneCall,
    link: '',
  },
];

export const MenuHelper: IMenuHeaderRight[] = [
  {
    title: 'Hotline',
    icon: BiPhoneCall,
    link: '',
  },
  {
    title: 'Live Chat',
    icon: BsChatDots,
    link: '',
  },
  {
    title: 'Live Chat',
    icon: BsChatDots,
    link: '',
  },
  {
    title: 'Messages',
    icon: TfiReload,
    link: '',
  },
  {
    title: 'Email',
    icon: TfiEmail,
    link: '',
  },
  {
    title: 'Tra cứu đơn hàng',
    icon: FaPaw,
    link: '',
  },
];

export const PaymentMethods: IPaymentMethods[] = [
  {
    title: 'Thanh toán COD',
    desc: '',
    type: 'COD',
  },
  {
    title: 'Thanh toán bằng MOMO',
    desc: '',
    type: 'MOMO',
  },
  {
    title: 'Thanh toán bằng VNPay',
    desc: '',
    type: 'VNPAY',
  },
];
