import { getConfigPage } from '@/services/setting/setting.api';
import { SlideProducts, Slider } from '@/components';
import { getSliders } from '@/services/slider/slider.api';

const Page = async () => {
  const promiseConfigPage: any = getConfigPage();
  const promiseSliders = getSliders();

  const [configPage, sliders] = await Promise.all([promiseConfigPage, promiseSliders]);

  return (
    <>
      <div className="h-[600px]">
        <Slider sliders={sliders} />
      </div>
      {configPage.data.data[0].page?.home &&
        configPage.data.data[0].page?.home.map((item: any, index: number) => (
          <SlideProducts key={index} title={item.title} categories={item.sub_cate} cate={item.sub_cate[0].query} />
        ))}
    </>
  );
};

export default Page;
