import React from 'react';
import { cookies } from 'next/headers';
import { IResponseOrders } from '@/types/order';

async function getOrders(): Promise<IResponseOrders> {
  const cookieStore = cookies();
  const user: any = cookieStore.get('user')?.value;
  const res = await fetch('http://localhost:8888/api/v1/order', {
    headers: {
      Authorization: `Bearer ${JSON.parse(user).token}`,
    },
  });
  return res.json();

}

const QuanLyDonHang = async () => {
  const orders = await getOrders();

  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">Quản lý đơn hàng</h3>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Mã đơn hàng
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày
              </th>
              <th scope="col" className="px-6 py-3">
                Trạng thái
              </th>
              <th scope="col" className="px-6 py-3">
                Sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Tổng tiền
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.data?.rows?.length > 0 &&
              orders?.data?.rows?.map(item => {
                return (
                  <tr key={item.transactionNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.orderInfo}
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Đã thanh toán</td>
                    <td className="px-6 py-4">
                      {item.ProductSizes.map(product => (
                        <p key={product.id}>{product.listSizes.title}</p>
                      ))}
                    </td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuanLyDonHang;
