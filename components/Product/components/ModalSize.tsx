import { IProductSize } from '@/types/product';
import React from 'react';

interface IProps {
  sizes: IProductSize[];
}
const ModalSize: React.FC<IProps> = ({ sizes }) => {
  return (
    <div className="absolute right-0 bg-white border bottom-11 animate-slide-up">
      <ul className="gap-5">
        {sizes.map(item => (
          <li className="py-3 text-xl font-semibold px-14 text-primaryDark" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModalSize;
