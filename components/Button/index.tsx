import classNames from 'classnames';
import React, { forwardRef } from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isStyleBefore?: boolean;
  isBgBlack?: boolean;
  className?: string;
}

const CustomButton = forwardRef<HTMLButtonElement, IProps>(
  ({ title, isBgBlack = false, className, isStyleBefore = false, style, type = 'button', ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={classNames(
          'px-4 py-2 rounded-tl-[24px] rounded-br-[24px] text-primaryDark border cursor-pointer hover:text-white transition ease-in-out hover:bg-primaryDark border-[#221F20]',
          {
            "'after:z-[-1] after:left-[30px] after:rounded-br-[24px] after:content-[''] after:top-1 after:border-[#b6b6b6] after:border-r after:border-t after:border-b relative after:w-3/4 after:h-[90%]  after:block after:absolute after:px-4 after:py-2":
              isStyleBefore,
            'bg-black text-white hover:bg-white hover:!text-black': isBgBlack,
          },
          className,
        )}
      >
        {typeof title === 'string' ? title?.toUpperCase() : title}
      </button>
    );
  },
);

CustomButton.displayName = 'Button';

export default CustomButton;
