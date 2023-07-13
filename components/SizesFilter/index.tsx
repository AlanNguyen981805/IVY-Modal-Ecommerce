'use client';

import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { INameCode } from '@/types/common';

interface IProps {
  sizes: INameCode[];
  isShowCheckSize?: boolean;
  onChange?: (value: INameCode) => void;
  onMultiChange?: (value: INameCode[]) => void;
  isMultiSelected?: boolean;
  dataActived?: INameCode[];
}

const { RiRulerLine } = icons;
const SizesFilter: React.FC<IProps> = ({
  sizes,
  isShowCheckSize,
  onChange,
  isMultiSelected = true,
  onMultiChange,
  dataActived,
}) => {
  const [arraySelected, setArraySelected] = useState<INameCode[]>(dataActived || []);
  const [active, setActive] = useState<INameCode>();
  const handleClick = (item: INameCode) => {
    if (isMultiSelected) {
      const found = arraySelected.find(data => data?.id === item?.id);
      const newSelected = found ? arraySelected.filter(i => i?.id !== item?.id) : [...arraySelected, item];
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
      <ul className="flex flex-wrap gap-3 mt-5">
        {sizes?.length > 0 &&
          sizes.map(item => {
            return (
              <li
                onClick={() => handleClick(item)}
                key={item?.id}
                className={classNames('px-4 py-1 border border-solid cursor-pointer text-primaryDark', {
                  'border-primaryDark font-semibold': isMultiSelected
                    ? arraySelected.find(size => size?.id === item?.id)
                    : active === item,
                })}
              >
                {item?.name}
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

export default memo(SizesFilter);
