import React from 'react';
import { dataFooter } from '../data.footer';

const Center = () => {
  return (
    <div className="flex justify-between w-full">
      {dataFooter.footerCenter.map((data, index: number) => {
        return (
          <div key={index} className="flex-col">
            <p className="mb-5 text-xl font-semibold">{data.title}</p>
            <ul>
              {data.item.map((child, index: number) => (
                <li key={index} className='mb-4 text-sm'>{child.title}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Center;
