'use client';

import { useEffect } from 'react';

import icons from '@/utils/icons';
import { IProductColor } from '@/types/product';

const { BsCheckLg } = icons;
interface IProps {
  colors: IProductColor[];
  colorActive: IProductColor | null;
  setColorActive: (idColor: IProductColor) => void;
}
const Colors: React.FC<IProps> = ({ colors, colorActive, setColorActive }) => {
  const handleActive = (item: IProductColor) => {
    setColorActive(item);
  };

  useEffect(() => {
    const activeColor = colors?.find(item => item?.isActive === true);
    if (activeColor) setColorActive(activeColor);
  }, []);

  return (
    <>
      <div className="flex items-center mr-4">
        <ul className="flex gap-4">
          {colors?.length > 0 &&
            colors.map(item => {
              return (
                <li
                  onClick={() => handleActive(item)}
                  key={item.id}
                  style={{ backgroundColor: item.code }}
                  className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer border`}
                >
                  {colorActive && colorActive.id === item.id && <BsCheckLg color="white" />}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Colors;
