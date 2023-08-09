import { IUser } from '@/types/auth';
import { create } from 'zustand';
import Cookies from 'js-cookie';

interface IStoreAuth {
  user: IUser | null;
  isLogged: boolean;
  setStoreAuth: (user: IUser) => void;
  logOut: () => void;
}

export const useStoreAuth = create<IStoreAuth>(set => {
  const userCookie = Cookies.get('user');
  const user = userCookie ? JSON.parse(userCookie).user : null;
  return {
    user: user,
    isLogged: user ? true : false,
    setStoreAuth: user => {
      set(() => ({ user, isLogged: true }));
      Cookies.set('user', JSON.stringify(user));
    },
    logOut: () => {
      set(() => ({ user: null, isLogged: false }));
      Cookies.remove('user');
    },
  };
});
