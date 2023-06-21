import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
const CustomInput = forwardRef<HTMLInputElement, IProps>(({ type = 'text', className, placeholder }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={classNames('rounded-md w-full outline-none py-[12px]', className)}
      placeholder={placeholder}
    />
  );
});

CustomInput.displayName = 'Input';

export default CustomInput;
