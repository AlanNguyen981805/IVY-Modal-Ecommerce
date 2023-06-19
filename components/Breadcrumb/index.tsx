'use client';

import icons from '@/utils/icons';

const { MdHorizontalRule } = icons;
export default function DefaultBreadcrumb() {
  return (
    <ul className="flex pb-4 border-b">
      <li>Trang chủ </li>
      <li className="flex items-center">
        <span className="px-4">
          <MdHorizontalRule size={12} />
        </span>
        Đầm nữ
      </li>
      <li className="flex items-center">
        <span className="px-4">
          <MdHorizontalRule size={12}  />
        </span>
        Đầm lụa thêu hoa
      </li>
    </ul>
  );
}
