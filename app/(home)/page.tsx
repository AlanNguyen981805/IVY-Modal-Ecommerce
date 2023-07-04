import React from 'react';

import { getConfigPage } from '@/services/setting/setting.api';
import { SlideProducts, Slider } from '@/components';
import { getSliders } from '@/services/slider/slider.api';

export const revalidate = 0;

const Page = async () => {
  const res: any = await getConfigPage();
  const sliders = await getSliders()

  return (
    <>
      <div className="h-[560px]">
        <Slider sliders={sliders} />
      </div>
      {res.data.data[0].page?.home && (
        res.data.data[0].page?.home.map((item: any, index: number) => (
          <SlideProducts
            key={index}
            title={item.title}
            categories={item.sub_cate}
          />
        ))
      )}
    </>
  );
};

export default Page;
