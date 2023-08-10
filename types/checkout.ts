export type IPayment = 'MOMO' | 'VNPAY' | 'COD';

export interface IPaymentMethods {
  title: string;
  desc: string;
  type: IPayment;
}

export interface IOrderInfo {
    amount: string;
    orderInfo: string;
    type: IPayment
}