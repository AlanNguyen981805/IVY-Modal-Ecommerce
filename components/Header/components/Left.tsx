'use client';

import React, { useState } from 'react';
import { categories } from '../data';

const HeaderLeft = () => {
  const [isShowChildCate, setIsShowChildCate] = useState(false);

  const handleMouseEnter = () => {
    setIsShowChildCate(true);
  };

  const handleMouseLeave = () => {
    setIsShowChildCate(false);
  };

  return (
    <div className="flex">
      {categories.map(item => (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="md:mr-5 2xl:text-base md:text-sm sm:text-xs sm:mr-2   font-semibold cursor-pointer hover:text-[#AC2F33] transition hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-4 hover:after:absolute relative"
          key={item.id}
        >
          {item.name.toUpperCase()}
        </span>
      ))}
      {isShowChildCate && (
        <div
          className=" absolute w-full bg-white px-[23px] py-6  top-14 animate-slide-up border border-[#E7E8E9] flex "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="mr-12">
            <li className="mb-4 font-semibold">NEW ARIVAL</li>
            <li className="mb-4 font-semibold">MOMENT OF DELIGHT</li>
            <li className="mb-4 font-semibold">IVY YOU</li>
            <li className="mb-4 font-semibold">SUMMER SCENT COLLECTIOIN</li>
          </ul>
          <ul className="flex flex-wrap">
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ÁO</span>
              <ul>
                <li className="mb-2 font-light">Áo sơ mi</li>
                <li className="mb-2 font-light">Áo dạ</li>
                <li className="mb-2 font-light">Áo thun ngắn tay</li>
                <li className="mb-2 font-light">Áo thun dài tay</li>
                <li className="mb-2 font-light">Áo len</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ÁO KHOÁC</span>
              <ul>
                <li className="mb-2 font-light">Áo khoác</li>
                <li className="mb-2 font-light">Áo dạ</li>
                <li className="mb-2 font-light">Áo măng tô</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">QUẦN & JUMPSUIT</span>
              <ul>
                <li className="mb-2 font-light">Item 1</li>
                <li className="mb-2 font-light">Item 1</li>
                <li className="mb-2 font-light">Item 1</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">CHÂN VÁY</span>
              <ul>
                <li className="mb-2 font-light">Chân váy</li>
                <li className="mb-2 font-light">Chân váy xếp ly</li>
                <li className="mb-2 font-light">Chân váy chữ A</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ĐẦM</span>
              <ul>
                <li className="mb-2 font-light">Đầm</li>
                <li className="mb-2 font-light">Đầm maxi/ voan</li>
                <li className="mb-2 font-light">Đầm thun</li>
                <li className="mb-2 font-light">Senora - Đầm dạ hội</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ĐỒ LÓT</span>
              <ul>
                <li className="mb-2 font-light">Quần bra</li>
                <li className="mb-2 font-light">Quần lót</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">PHỤ KIỆN</span>
              <ul>
                <li className="mb-2 font-light">Túi/Ví</li>
                <li className="mb-2 font-light">Giày/dép & Sandals</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ĐỒ LÓT</span>
              <ul>
                <li className="mb-2 font-light">Quần bra</li>
                <li className="mb-2 font-light">Quần lót</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ĐỒ LÓT</span>
              <ul>
                <li className="mb-2 font-light">Quần bra</li>
                <li className="mb-2 font-light">Quần lót</li>
              </ul>
            </li>
            <li className="mr-12">
              <span className="block mb-2 font-semibold">ĐỒ LÓT</span>
              <ul>
                <li className="mb-2 font-light">Quần bra</li>
                <li className="mb-2 font-light">Quần lót</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderLeft;
