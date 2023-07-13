/* eslint-disable @next/next/no-img-element */
'use client';

import { ISlider } from '@/types/slider';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';

interface IProps {
  sliders: ISlider[];
}
export default function DefaultCarousel({ sliders }: IProps) {
  return (
    <>
      <Carousel
        className="slider after:content-[''] after:block after:w-[98%] after:h-[100%] after:-z-10 after:rounded-br-[80px] after:absolute relative after:top-6 border-[#D1D2D4] after:-right-4 after:border"
        slideInterval={5000}
      >
        {sliders.map(item => (
          <Image key={item.id} alt="..." src={item.image} width={2000} height={600} />
        ))}
      </Carousel>
    </>
  );
}
