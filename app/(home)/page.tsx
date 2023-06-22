import React from 'react';

import { SlideProducts, Slider } from '@/components';
import { dataSlideProducts } from '@/components/SlideProducts/data';

const Page = () => {
  return (
    <>
      <div className="h-[560px]">
        <Slider />
      </div>

      <SlideProducts
        listProducts={dataSlideProducts.products}
        title="NEW ARRIVAL"
        categories={['IVY-modal', 'IVY-men', 'IVY-kids']}
      />
      <SlideProducts
        listProducts={dataSlideProducts.products}
        isViewAll={false}
        categories={['IVY-modal', 'IVY-men', 'IVY-kids']}
        title="BEST SELLER - ONLINE ONLY"
      />
       {/* <ProductImage />  */}
    </>
  );
};

export default Page;
