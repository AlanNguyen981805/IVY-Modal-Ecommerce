interface Product {
  title: string;
  cateId: string;
  slug: string;
  price: number;
  oldPrice: number | null;
  star: number;
}

interface OrderProduct {
  id: string;
  orderId: string;
  productId: string;
  quantity: number | null;
  createdAt: string;
  updatedAt: string;
}

interface ProductSize {
  id: string;
  sku: string;
  createdAt: string;
  updatedAt: string;
  listSizes: Product;
  OrderProduct: OrderProduct;
}

interface Transaction {
  transactionStatus: number;
  orderInfo: string;
  paymentType: string;
  transactionNo: string;
  createdAt: string;
  updatedAt: string;
  ProductSizes: ProductSize[];
}

export interface IResponseOrders {
  error: number;
  data: {
    count: number;
    rows: Transaction[];
  };
}
