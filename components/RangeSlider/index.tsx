'use client';

import { useState, useEffect, useRef } from 'react';

import { tranformCurrency } from '@/utils/tranform';

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceCap }: any) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e: any) => {
    if (maxValue - minValue >= priceCap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    if (progressRef.current) {
      const { style }: any = progressRef.current;
      if (style) {
        style.left = (minValue / max) * step + '%';
        style.right = step - (maxValue / max) * step + '%';
      }
    }
  }, [minValue, maxValue, max, step]);

  return (
    <div className="relative">
      <div className="relative mb-4">
        <div className="relative h-1 bg-gray-300 rounded-md slider">
          <div className="absolute h-1 bg-black rounded progress " ref={progressRef}></div>
        </div>

        <div className="relative range-input ">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="absolute w-full h-1 transition bg-transparent appearance-none pointer-events-none range-min -top-1"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="absolute w-full h-1 transition bg-transparent appearance-none pointer-events-none range-max -top-1"
          />
        </div>

        <span className="absolute left-0 mt-2 text-base">{tranformCurrency(minValue)}đ</span>
        <span className="absolute right-0 mt-2 text-base">{tranformCurrency(maxValue)}đ</span>
      </div>
    </div>
  );
};

export default RangeSlider;
