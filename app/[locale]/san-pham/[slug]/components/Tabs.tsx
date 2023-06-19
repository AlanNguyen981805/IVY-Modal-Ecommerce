'use client';

import { Tabs } from 'flowbite-react';

export default function TabsWithUnderline() {
  return (
    <Tabs.Group aria-label="Tabs with underline" style="underline" className='border-t '>
      <Tabs.Item active title="GIỚI THIỆU">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">Profile tabs associated content</span>. Clicking
          another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control
          the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item title="CHI TIẾT SẢN PHẨM">
        <p>
          This is
          <span className="font-medium text-gray-800 dark:text-white">Dashboard tabs associated content</span>.
          Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
          control the content visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item disabled title="BẢO QUẢN">
        <p>Disabled content</p>
      </Tabs.Item>
    </Tabs.Group>
  );
}
