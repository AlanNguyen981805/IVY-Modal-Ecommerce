'use client';

import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';

import icons from '@/utils/icons';

interface IProps {
  sizes: string[];
  isShowCheckSize?: boolean;
  onChange: (value: string[] | string) => void;
  isMultiSelected?: boolean;
}

const { RiRulerLine } = icons;
const Sizes: React.FC<IProps> = ({ sizes, isShowCheckSize, onChange, isMultiSelected = true }) => {
  const [arraySelected, setArraySelected] = useState<string[]>([]);
  const [active, setActive] = useState('');

  const handleClick = (item: string) => {
    if (isMultiSelected) {
      const found = arraySelected.includes(item);
      const newSelected = found ? arraySelected.filter(i => i !== item) : [...arraySelected, item];
      setArraySelected(newSelected);
    } else {
      setActive(item);
      onChange(item);
    }
  };

  useEffect(() => {
    if (isMultiSelected) {
      onChange(arraySelected);
    }
  }, [arraySelected, isMultiSelected]);

  return (
    <div>
      <ul className="flex gap-3 mt-5">
        {sizes.length > 0 &&
          sizes.map(item => (
            <li
              onClick={() => handleClick(item)}
              key={item}
              className={classNames('px-4 py-1 border border-solid cursor-pointer text-primaryDark', {
                'border-primaryDark font-semibold': isMultiSelected ? arraySelected.includes(item) : active === item,
              })}
            >
              {item}
            </li>
          ))}
      </ul>
      {isShowCheckSize && (
        <p className="flex items-center mt-3 text-sm text-primary">
          <RiRulerLine /> Kiểm tra size của bạn
        </p>
      )}
    </div>
  );
};

export default memo(Sizes);
