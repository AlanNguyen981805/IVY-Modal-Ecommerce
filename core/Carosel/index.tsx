'use client';

import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'; // import from 'keen-slider/react.es' for to get an ES module

import icons from '@/utils/icons';

const { HiArrowLeft, HiArrowRight } = icons;
export const Carosousel = ({ children }: { children: React.ReactNode }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 5,
      spacing: 30,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if(loaded) {
      instanceRef.current?.update();
    }
  }, [children, loaded, instanceRef]);

  return (
    <div ref={ref} className="px-1 keen-slider">
      {loaded && children}
      {
        <>
          <div className="absolute cursor-pointer arrowSlide">
            <HiArrowLeft
              size={40}
              color="#BCBDC0"
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            />
          </div>

          <div className="absolute right-0 cursor-pointer arrowSlide arrowRight">
            <HiArrowRight
              size={40}
              color="#BCBDC0"
              onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            />
          </div>
        </>
      }
    </div>
  );
};
