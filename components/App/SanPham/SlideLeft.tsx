'use client';

import React, { MutableRefObject, useState } from 'react';
import Image from 'next/image';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

interface IProps {
  images: string[];
}

function ThumbnailPlugin(mainRef: MutableRefObject<KeenSliderInstance | null>): KeenSliderPlugin {
  return slider => {
    function removeActive() {
      slider.slides.forEach(slide => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main: any) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function SlideLeft({ images }: IProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    vertical: true,
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      vertical: true,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  );
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  if (images.length <= 0) return null;

  return (
    <>
      <div className="flex w-full max-h-[800px] h-[800px]">
        <div ref={sliderRef} className="w-4/5 keen-slider">
          {images.map(item => (
            <div key={item} className="keen-slider__slide keen-slider__image" onMouseMove={e => handleMouseMove(e)}>
              <Image
                style={{ transformOrigin: `${position.x}px ${position.y}px` }}
                src={item}
                width={900}
                height={900}
                alt="product"
              />
            </div>
          ))}
        </div>

        <div className="w-[140px] ml-4 overflow-hidden">
          <div ref={thumbnailRef} className="h-full keen-slider thumbnail">
            {images.map(item => (
              <div key={item} className="keen-slider__slide">
                <Image src={item} fill alt="thumnail" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
