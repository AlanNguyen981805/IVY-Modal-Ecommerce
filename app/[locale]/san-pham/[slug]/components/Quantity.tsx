"use client"

import React, { useState } from 'react';

const Quantity = () => {
  const [valueQuantity, setValueQuantity] = useState(0);
  
  return (
    <div className='flex items-center mt-4'>
      <label htmlFor="custom-input-number" className="mr-4 text-lg font-semibold text-primary">
        Số lượng
      </label>
      <div className="h-12 w-36 custom-number-input">
        <div className="relative flex flex-row w-full h-12 mt-1 bg-transparent rounded-lg">
          <button
            onClick={() => setValueQuantity(valueQuantity - 1)}
            data-action="decrement"
            className="absolute w-[55px] h-full text-gray-600 bg-white border outline-none cursor-pointer right-24 rounded-tl-xl rounded-br-xl hover:text-gray-700"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="flex items-center w-full font-semibold text-center text-gray-700 bg-white border border-gray-200 outline-none outline-0 focus:ring-0 focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
            name="custom-input-number"
            value={valueQuantity}
          ></input>
          <button
            onClick={() => setValueQuantity(valueQuantity + 1)}
            data-action="increment"
            className="absolute w-[55px] h-full text-gray-600 bg-white border rounded-r cursor-pointer left-24 rounded-tl-xl rounded-br-xl hover:text-gray-700"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
