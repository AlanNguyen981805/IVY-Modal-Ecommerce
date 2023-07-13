'use client';

import { memo, useEffect, useState } from 'react';

import icons from '@/utils/icons';
import { IProductColor } from '@/types/product';

const { BsCheckLg } = icons;
interface IProps {
  colors: IProductColor[];
  colorActive?: IProductColor | null;
  setColorActive?: (idColor: IProductColor) => void;
  isMultiSelected?: boolean;
  onChangeMultiColor?: (color: IProductColor[]) => void;
  dataActived?: IProductColor[];
}
const Colors: React.FC<IProps> = ({
  colors,
  colorActive,
  setColorActive,
  isMultiSelected = false,
  onChangeMultiColor,
  dataActived,
}) => {
  const [arraySelected, setArraySelected] = useState<IProductColor[]>(dataActived || []);
  const handleActive = (item: IProductColor) => {
    if (isMultiSelected) {
      const found = arraySelected.find(data => data.id === item.id);
      const newSelected = found ? arraySelected.filter(i => i.id !== item.id) : [...arraySelected, item];
      setArraySelected(newSelected);
    } else {
      setColorActive && setColorActive(item);
    }
  };

  useEffect(() => {
    const activeColor = colors?.find(item => item?.isActive === true);
    if (activeColor) {
      setColorActive && setColorActive(activeColor);
    }
  }, []);

  useEffect(() => {
    if (isMultiSelected) {
      onChangeMultiColor && onChangeMultiColor(arraySelected);
    }
  }, [isMultiSelected, arraySelected]);

  return (
    <>
      <div className="flex items-center mr-4">
        <ul className="flex flex-wrap gap-4">
          {colors?.length > 0 &&
            colors.map(item => {
              return (
                <li
                  onClick={() => handleActive(item)}
                  key={item.id}
                  style={{ backgroundColor: item.code }}
                  className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer border`}
                >
                  {(isMultiSelected ? arraySelected.find(size => size.id === item.id) : colorActive === item) && (
                    <BsCheckLg color={item.code === '#fff' ? 'black' : 'white'}/>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default memo(Colors);
