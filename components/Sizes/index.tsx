'use client';

import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { IProductSize } from '@/types/product';

interface IProps {
  sizes: IProductSize[];
  isShowCheckSize?: boolean;
  onChange?: (value: IProductSize) => void;
  onMultiChange?: (value: IProductSize[]) => void;
  isMultiSelected?: boolean;
  dataActived?: IProductSize[];
}

const { RiRulerLine } = icons;
const Sizes: React.FC<IProps> = ({
  sizes,
  isShowCheckSize,
  onChange,
  isMultiSelected = true,
  onMultiChange,
  dataActived,
}) => {
  const [arraySelected, setArraySelected] = useState<IProductSize[]>(dataActived || []);
  const [active, setActive] = useState<IProductSize>();

  const handleClick = (item: IProductSize) => {
    if (isMultiSelected) {
      const found = arraySelected.find(data => data.id === item.id);
      const newSelected = found ? arraySelected.filter(i => i.id !== item.id) : [...arraySelected, item];
      setArraySelected(newSelected);
    } else {
      setActive(item);
      onChange && onChange(item);
    }
  };

  useEffect(() => {
    if (isMultiSelected) {
      onMultiChange && onMultiChange(arraySelected);
    }
  }, [arraySelected, isMultiSelected, onMultiChange]);

  return (
    <div>
      <ul className="flex gap-3 mt-5">
        {sizes.length > 0 &&
          sizes.map(item => {
            return (
              <li
                onClick={() => handleClick(item)}
                key={item.id}
                className={classNames('px-4 py-1 border border-solid cursor-pointer text-primaryDark', {
                  'border-primaryDark font-semibold': isMultiSelected
                    ? arraySelected.find(size => size.id === item.id)
                    : active === item,
                })}
              >
                {item.name}
              </li>
            );
          })}
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
