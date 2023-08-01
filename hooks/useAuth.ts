import { IUser } from '@/types/auth';
import { cookies } from 'next/dist/client/components/headers';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import Cookies from 'js-cookie';

interface IStoreAuth {
  user: object;
  isLogged: boolean;
  setStoreAuth: (user: IUser) => void;
}

export const useStoreAuth = create<IStoreAuth>(set => {
    const userCookie = Cookies.get('user');
    const user = userCookie ? JSON.parse(userCookie) : {};
  
    return {
      user: user,
      isLogged: user.token ?  true : false,
      setStoreAuth: user => {
        set(() => ({ user }));
        Cookies.set('user', JSON.stringify(user));
      },
    };
  });
  
  
  
  
  
