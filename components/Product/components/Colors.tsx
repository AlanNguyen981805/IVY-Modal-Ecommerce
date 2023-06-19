'use client';

import { useEffect } from 'react';
import icons from '@/utils/icons';

const { BsCheckLg } = icons;
interface IProps {
  colors: { id: string; code: string; active?: boolean }[];
  colorActive: string;
  setColorActive: any;
}
const Colors: React.FC<IProps> = ({ colors, colorActive, setColorActive }) => {
  const handleActive = (item: { id: string; code: string; active?: boolean }) => {
    setColorActive(item.id);
  };

  useEffect(() => {
    const activeColor = colors.find(item => item?.active === true);
    if (activeColor) setColorActive(activeColor?.id);
  }, []);

  return (
    <>
      <div className="flex items-center mr-4">
        <ul className="flex gap-4">
          {colors.length > 0 &&
            colors.map(item => {
              return (
                <li
                  onClick={() => handleActive(item)}
                  key={item.id}
                  style={{ backgroundColor: item.code }}
                  className={`flex items-center justify-center w-5 h-5 rounded-full cursor-pointer`}
                >
                  {colorActive === item.id && <BsCheckLg color="white" />}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Colors;
