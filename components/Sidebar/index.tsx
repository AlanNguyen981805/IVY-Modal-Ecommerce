'use client';

import { MenuCustomer } from '@/constants/indext';
import { useStoreAuth } from '@/hooks';
import { ROUTER } from '@/utils/consts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Sidebar = () => {
  const { logOut } = useStoreAuth();
  const router = useRouter();

  return (
    <div className="p-6 border border-gray-700 rounded-tl-3xl rounded-br-3xl">
      <div className="pb-6 mb-5 text-xl font-semibold text-center text-gray-500 border-b">
        <span className="text-center ">Hiep Nguyen</span>
      </div>
      <div>
        {MenuCustomer.map(({ icon: Icon, link, title, onClick }) => (
          <Link
            href={link}
            onClick={onClick}
            key={title}
            className="flex items-center gap-2 py-3 font-semibold text-gray-500 transition-all cursor-pointer hover:text-black text-md"
          >
            <Icon />
            {title}
          </Link>
        ))}
        <div
          onClick={() => {
            logOut();
            router.push(ROUTER.HOME);
          }}
          className="flex items-center gap-2 py-3 font-semibold text-gray-500 transition-all cursor-pointer hover:text-black text-md"
        >
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
