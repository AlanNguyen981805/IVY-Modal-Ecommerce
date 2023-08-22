import { IProductSize } from '@/types/product';
import React, { memo } from 'react';

interface IProps {
  sizes: IProductSize[];
  handleAddCard: (item: IProductSize) => void;
}
const ModalSize: React.FC<IProps> = ({ sizes, handleAddCard }) => {
  return (
    <div className="absolute right-0 bg-white border bottom-11 animate-slide-up">
      <ul className="gap-5">
        {sizes.map(item => (
          <li
            className="py-3 text-xl font-semibold transition px-14 text-primaryDark hover:scale-125"
            key={item.size?.id}
            onClick={() => handleAddCard(item)}
          >
            {item.size?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ModalSize);
