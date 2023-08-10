import classNames from 'classnames';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  style?: string;
}

const Box: React.FC<IProps> = ({ children, style }) => {
  return (
    <div className={classNames('w-full px-6 py-8 border rounded-tl-[32px] rounded-br-[32px]', style)}>{children}</div>
  );
};

export default Box;
