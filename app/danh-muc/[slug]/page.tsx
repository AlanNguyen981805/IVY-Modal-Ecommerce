import { Breadcrumb } from '@/components';
import React from 'react';
import Filter from './components/Filter';
import List from './components/List';

const Page = ({ params: { slug } }: any) => {
  return (
    <div>
      <Breadcrumb />

      <div className="flex w-full">
        <div className="w-3/12">
          <Filter />
        </div>
        <div className="w-3/4 ml-10">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Page;
