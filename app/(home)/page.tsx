import React from 'react';

import { getConfigPage } from '@/services/setting/setting.api';
import { SlideProducts, Slider } from '@/components';
export const revalidate = 0;
const Page = async () => {
  const res: any = await getConfigPage();
  return (
    <>
      <div className="h-[560px]">
        <Slider />
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
