'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import icons from '@/utils/icons';

const { SlArrowUp } = icons;
const Select = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <div
        className="relative flex items-center px-4 py-3 transition-all border rounded-full cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="block mr-12 text-primary">Được yêu thích nhất</span>
        <span
          className={classNames('duration-700 transition', {
            'rotate-0': active,
            'rotate-180': !active,
          })}
        >
          <SlArrowUp size={18} />
        </span>
        <>
          <ul
            className={classNames(
              'absolute left-0 z-20 w-full px-4 py-6 bg-white border  animate-slide-up transition-all duration-700 rounded-xl top-14',
              {
                'max-h-0 opacity-0': !active,
                'max-h-[200px] opacity-100': active,
              },
            )}
          >
            <li className="py-2 transition-all duration-400 hover:font-semibold">Mặc định</li>
            <li className="py-2 transition-all duration-400 hover:font-semibold">Mặc định</li>
            <li className="py-2 transition-all duration-400 hover:font-semibold">Mặc định</li>
          </ul>
        </>
      </div>
    </div>
  );
};

export default Select;
