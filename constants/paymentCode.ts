export interface IPaymentCode {
  code: string;
  type: 'error' | 'success';
  message: string;
}
export const PAYMENT_MOMO_CODE: IPaymentCode[] = [
  {
    code: '1006',
    type: 'error',
    message: 'Giao dịch thất bại do người dùng đã từ chối xác nhận thanh toán.',
  },
  {
    code: '0',
    type: 'success',
    message: 'Thành công',
  },
];

export const PAYMENT_VNPAY_CODE: IPaymentCode[] = [
  {
    code: '00',
    type: 'success',
    message: 'Giao dịch thành công',
  },
  {
    code: '24',
    type: 'error',
    message: 'Khách hàng hủy giao dịch',
  },
];
