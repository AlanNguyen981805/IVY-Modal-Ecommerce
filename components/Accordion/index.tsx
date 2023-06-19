"use client"
import classNames from 'classnames';
import { useState } from 'react';

import icons from '@/utils/icons';

const { BsPlus, BiMinus } = icons;

interface IProps {
  children: React.ReactNode;
  title: string;
}

export default function CustomAccordion({ children, title }: IProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full">
      <div className="relative py-5 border-b">
        <div className="flex items-center">
          <span className="relative block w-full cursor-pointer">{title}</span>
          <span className="text-2xl cursor-pointer" onClick={() => setActive(!active)}>
            {active ? <BiMinus size={24} /> : <BsPlus size={24} />}
          </span>
        </div>
        <div
          className={classNames('relative overflow-hidden overflow-y-auto transition-all duration-700 bg-white', {
            'max-h-0': !active,
            'max-h-48': active,
          })}
        >
          {children}
        </div>
      </div>
    </div>
  );
}