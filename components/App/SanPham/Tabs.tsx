"use client"

import { IProduct } from '@/types/product';
import { Tabs } from 'flowbite-react';

type IProps = Pick<IProduct, 'description' | 'intro' | 'preserve'>;
export default function TabsWithUnderline({ description, intro, preserve }: IProps) {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline" className="border-t ">
      <Tabs.Item active title="GIỚI THIỆU">
        <p>{intro}</p>
      </Tabs.Item>
      <Tabs.Item title="CHI TIẾT SẢN PHẨM">
        <p>{description}</p>
      </Tabs.Item>
      <Tabs.Item title="BẢO QUẢN">
        <p>{preserve}</p>
      </Tabs.Item>
    </Tabs.Group>
  );
}
