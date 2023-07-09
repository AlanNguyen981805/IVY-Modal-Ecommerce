'use client';

import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';

interface IProps {
  showLabel?: boolean;
  classNameBtn1?: string;
  classNameBtn2?: string;
  classNameInput?: string;
  classNameParent?: string;
  classNameParent2?: string;
  numInStock: number;
  quantity?: number;
  setQuantity?: any;
  onMinus?: (quantity: number) => void;
  onPlus?: (quantity: number) => void;
}
const Quantity: React.FC<IProps> = ({
  showLabel = true,
  classNameBtn1,
  classNameParent2,
  classNameBtn2,
  classNameInput,
  classNameParent,
  numInStock,
  quantity,
  onMinus,
  onPlus,
  setQuantity,
}) => {
  const [valueQuantity, setValueQuantity] = useState(quantity || 0);

  useEffect(() => {
    quantity && setValueQuantity(quantity);
  }, [quantity]);

  useEffect(() => {
    setQuantity && setQuantity(quantity);
  }, [valueQuantity]);
  return (
    <div className="flex items-center mt-4">
      {showLabel && (
        <label htmlFor="custom-input-number" className="mr-4 text-lg font-semibold text-primary">
          Số lượng
        </label>
      )}

      <div className={classNames('h-12 w-36 custom-number-input', classNameParent2)}>
        <div className={classNames('relative flex flex-row w-full mt-1 bg-transparent rounded-lg', classNameParent)}>
          <button
            onClick={() => {
              if (valueQuantity > 0) {
                setValueQuantity(valueQuantity - 1);
                onMinus && onMinus(1);
              }
            }}
            data-action="decrement"
            className={classNames(
              'absolute w-[55px] h-full text-gray-600 bg-white border outline-none cursor-pointer right-24 rounded-tl-xl rounded-br-xl hover:text-gray-700',
              classNameBtn1,
            )}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className={classNames(
              'flex items-center w-full font-semibold text-center text-gray-700 bg-white border border-gray-200 outline-none outline-0 focus:ring-0 focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default',
              classNameInput,
            )}
            name="custom-input-number"
            value={valueQuantity}
          ></input>
          <button
            onClick={() => {
              if (valueQuantity < numInStock) {
                setValueQuantity(valueQuantity + 1);
                onPlus && onPlus(1);
              }
            }}
            data-action="increment"
            className={classNames(
              'absolute w-[55px] h-full text-gray-600 bg-white border rounded-r cursor-pointer left-24 rounded-tl-xl rounded-br-xl hover:text-gray-700',
              classNameBtn2,
            )}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Quantity);
