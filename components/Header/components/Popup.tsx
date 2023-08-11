import { useStoreAuth } from '@/hooks';
import { IMenuHeaderRight } from '@/types/menu';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface IProps {
  menu: IMenuHeaderRight[];
  name: string;
  position: string;
}
const Popup: React.FC<IProps> = ({ menu, name, position }) => {
  const { logOut } = useStoreAuth();
  const router = useRouter();

  return (
    <div
      className={classNames(
        'absolute w-[255px] bg-white px-[23px] py-6  top-12 animate-slide-up border border-[#E7E8E9]',
        position,
      )}
    >
      <span className="block font-semibold">{name}</span>
      <div className="flex-col flex-wrap mt-3 text-[#808285]">
        {menu.map(({ icon: Icon, title, link }) => (
          <Link
            href={link}
            key={title}
            className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition"
          >
            <Icon />
            <span className="text-sm font-semibold">{title}</span>
          </Link>
        ))}
        <div
          onClick={() => {
            logOut();
          }}
          className="flex items-center gap-3 mb-4 hover:text-[#221F20] cursor-pointer transition"
        >
          <span className="text-sm font-semibold">Đăng xuất</span>
        </div>
      </div>
    </div>
  );
};

export default Popup;
