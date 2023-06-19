'use client';
import icons from '@/utils/icons';
import classNames from 'classnames';
import { useState } from 'react';

const { BsCheckLg } = icons;

interface IProps {
  data: { name: string; value: string }[];
  onChange: (value: string) => void;
}

const Select: React.FC<IProps> = ({ data, onChange }) => {
  const [active, setActive] = useState('');
  
  const handleClick = (value: string) => {
    setActive(value);
    onChange(value);
  };

  return (
    <div>
      <ul>
        {data.map(item => (
          <li
            key={item.value}
            className={`flex items-center gap-4 mb-4 cursor-pointer transition`}
            onClick={() => handleClick(item.value)}
          >
            <div
              className={classNames('flex items-center justify-center w-5 h-5 transition rounded-full ', {
                'bg-black': active === item.value,
                'bg-white  border-solid border-2': active !== item.value,
              })}
            >
              {active === item.value && <BsCheckLg color="white" />}
            </div>
            <p
              className={classNames('text-primaryDark', {
                'font-semibold': active === item.value,
              })}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
