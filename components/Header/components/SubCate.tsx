'use client';
import Link from 'next/link';
import React from 'react';

import { ICategory } from '@/types/category';
import { ROUTER } from '@/utils/consts';

interface IProps {
  data: ICategory | null;
}
const SubCate: React.FC<IProps> = ({ data }) => {
  const renderLeafNodes = (leafNodes: Omit<ICategory, 'children'>[]) => {
    return leafNodes.map(item => (
      <li key={item?.id} className="mb-4 font-semibold cursor-pointer">
        {item?.name}
      </li>
    ));
  };

  const renderSubChildren = (subChildren: ICategory[]) => {
    return subChildren.map((subChild: ICategory) => (
      <li className="mb-2 font-light cursor-pointer" key={subChild.id}>
        <Link href={`${ROUTER.PRODUCTS_BY_CATE}/${subChild.slug}`}>{subChild.name}</Link>
      </li>
    ));
  };

  return (
    <>
      <ul className="mr-12">{data?.children?.flatMap(sub => sub?.leafNode && renderLeafNodes(sub.leafNode))}</ul>
      <ul className="flex flex-wrap">
        {data?.children?.map(child => (
          <li className="mr-12 cursor-pointer" key={child.id}>
            <span className="block mb-2 font-semibold">{child.name}</span>
            <ul>{child.children && renderSubChildren(child.children)}</ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubCate;
