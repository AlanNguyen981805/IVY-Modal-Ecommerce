import React from 'react';

interface IProps {
  title: string;
  color: string;
  colorBadge: string;
}

const Label: React.FC<IProps> = ({ title, color, colorBadge }) => {
  return (
    <div>
      <p
        className={`badge-new absolute top-0 rounded-tr-[26px] ${color} -left-2 block py-1  font-semibold text-white px-5`}
      >
        {title}
      </p>
      <div
        className={`w-0 h-0 border -left-2 border-solid border-transparent absolute top-8 ${colorBadge} border-l-[10px] border-t-[17px]`}
      ></div>
    </div>
  );
};

export default Label;
