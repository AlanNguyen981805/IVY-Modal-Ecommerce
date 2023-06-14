/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function DefaultCarousel() {
  const images = [
    'https://pubcdn.ivymoda.com/files/news/2023/06/14/54c74b12970e059a25170e1432439631.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/06/09/ec4226bcf950ded7eec7a08119b21ced.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/06/05/40ec1d403c8b69f183977a469ff7ae7d.jpg',
    'https://pubcdn.ivymoda.com/files/news/2023/05/29/56aa2a96b2157626e3816c98ef97ae8c.jpg',
  ];
  return (
    <>
      <Carousel
        className="slider after:content-[''] after:block after:w-[98%] after:h-[96%] after:-z-10 after:rounded-br-[80px] after:absolute relative after:top-6 border-[#D1D2D4] after:-right-4 after:border"
        slideInterval={5000}
      >
        {images.map(item => (
          <Image key={item} alt="..." src={item} width={1000} height={100} />
        ))}
      </Carousel>
    </>
  );
}
