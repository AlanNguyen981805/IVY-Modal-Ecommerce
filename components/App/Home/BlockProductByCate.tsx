import SlideProducts from '@/components/SlideProducts';
import { getConfigPage } from '@/services/setting/setting.api';
import { IConfigPage } from '@/types/settings';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

interface IProps {
  dataConfigPage: IConfigPage[];
  };

const BlockProductByCate: React.FC<IProps> = ({ dataConfigPage }) => {
    const {data, isLoading} = useQuery<IConfigPage[]>({
        queryKey: ["config-page"],
        queryFn: () => getConfigPage(),
        initialData: dataConfigPage
    })

  return (
    <>
      {/* <SlideProducts key={index} title={item.title} categories={item.sub_cate} /> */}
    </>
  );
};

export default BlockProductByCate;
