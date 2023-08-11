import { create } from 'zustand';
import Cookies from 'js-cookie';

interface IFormAddress {
  fullName: string;
  phone: string;
  address: string;
}

interface IFormAddressUser {
  formAddressUser: IFormAddress;
  setFormAddressUser: (data: IFormAddress) => void;
}

const userCookie = Cookies.get('user');
const user = userCookie ? JSON.parse(userCookie).user : null;
export const useFormAddressCheckout = create<IFormAddressUser>(set => ({
  formAddressUser: {
    address: user?.address || '',
    fullName: user?.firstName + user?.lastName || '',
    phone: user?.phone,
  },
  setFormAddressUser(data) {
    set(() => ({ formAddressUser: data }));
  },
}));
