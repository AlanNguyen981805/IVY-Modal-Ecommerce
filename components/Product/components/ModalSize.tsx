import React from 'react';

interface IProps {
  sizes: string[];
}
const ModalSize: React.FC<IProps> = ({ sizes }) => {
  return (
    <div className='absolute right-0 bg-white border bottom-11 animate-slide-up'>
      <ul className='gap-5'>
        {sizes.map((item, index) => (
          <li className='py-3 text-xl font-semibold px-14 text-primaryDark' key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModalSize;
