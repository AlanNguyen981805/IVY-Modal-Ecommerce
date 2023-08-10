import classNames from 'classnames';
import React from 'react';

interface IProps {
  step0?: boolean;
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
}

const Process: React.FC<IProps> = ({ step0, step1, step2, step3 }) => {
  return (
    <ol className="flex items-center justify-center w-full px-6 pt-4 pb-10 bg-white border rounded-tl-2xl rounded-br-2xl">
      <li
        className={classNames(
          "flex relative w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block ",
          { 'after:border-gray-100': !step0 },
          { 'after:border-gray-800': step0 },
        )}
      >
        <div
          className={classNames(
            'flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full lg:h-12 lg:w-12 shrink-0',
            {},
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white lg:w-6 lg:h-6 " viewBox="0 0 512 512">
            <circle cx="176" cy="416" r="32" fill="currentColor" />
            <circle cx="400" cy="416" r="32" fill="currentColor" />
            <path
              fill="currentColor"
              d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93Z"
            />
          </svg>
        </div>
        <p className="absolute text-xs top-14 left-[-2px]">Giỏ hàng</p>
      </li>
      <li
        className={classNames(
          'relative flex w-full items-center  after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ',
          { 'after:border-gray-100': !step2 },
          { 'after:border-gray-800': step2 },
        )}
      >
        <div
          className={classNames('flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12  shrink-0', {
            'bg-gray-100 ': !step1,
            'bg-gray-800 ': step1,
          })}
        >
          <svg
            aria-hidden="true"
            className={classNames('w-5 h-5 lg:w-6 lg:h-6 dark:text-blue-300', {
              'text-gray-500': !step1,
              'text-white': step1,
            })}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="absolute text-xs top-14 left-[-2px]">Đặt hàng</p>
      </li>
      <li className={classNames(
          'relative flex w-full items-center  after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block ',
          { 'after:border-gray-100': !step3 },
          { 'after:border-gray-800': step3 },
        )}>
        <div
          className={classNames('flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12  shrink-0', {
            'bg-gray-100 ': !step2,
            'bg-gray-800 ': step2,
          })}
        >
          <svg
            aria-hidden="true"
            className={classNames('w-5 h-5 lg:w-6 lg:h-6 dark:text-blue-300', {
              'text-gray-500': !step2,
              'text-white': step2,
            })}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
            <path
              fill-rule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="absolute text-xs top-14 left-[-2px]">Thanh toán</p>
      </li>
      <li className="relative flex items-center ">
        <div
          className={classNames('flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12  shrink-0', {
            'bg-gray-100 ': !step3,
            'bg-gray-800 ': step3,
          })}
        >
          <svg
            aria-hidden="true"
            className={classNames('w-5 h-5 lg:w-6 lg:h-6 dark:text-blue-300', {
              'text-gray-500': !step3,
              'text-white': step3,
            })}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <p className="absolute w-20 text-xs text-center top-14 left-[-12px]">Hoàn thành đơn</p>
      </li>
    </ol>
  );
};

export default Process;
