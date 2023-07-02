'use client';

import React, { useEffect, useState } from 'react';

import { ICategory } from '@/types/category';
import SubCate from './SubCate';

interface IProps {
  categories: ICategory[];
}
const HeaderLeft: React.FC<IProps> = ({ categories }) => {
  const [isShowChildCate, setIsShowChildCate] = useState(false);
  const [subCate, setSubCate] = useState<ICategory | null>(null)

  const handleMouseEnter = (item?: ICategory) => {
    setIsShowChildCate(true);
    item && setSubCate(item)
  };

  const handleMouseLeave = () => {
    setIsShowChildCate(false);
  };

  return (
    <div className="flex">
      {categories.map((item, index) => (
        <>
          <span
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
            className="md:mr-5 2xl:text-base md:text-sm sm:text-xs sm:mr-2   font-semibold cursor-pointer hover:text-[#AC2F33] transition hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-4 hover:after:absolute relative"
            key={index}
          >
            {item.name.toUpperCase()}
          </span>
        </>
      ))}
      {isShowChildCate && (
        <div
          className=" absolute z-20 w-full bg-white px-[23px] py-6  top-14 animate-slide-up border border-[#E7E8E9] flex "
          onMouseEnter={() => handleMouseEnter()}
          onMouseLeave={handleMouseLeave}
        >
          <SubCate data={subCate} />
        </div>
      )}
    </div>
  );
};

export default HeaderLeft;
