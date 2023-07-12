export interface IProductColor {
  id: string;
  name?: string;
  code: string;
  isActive?: boolean;
  image?: {
    imgProduct: string;
  };
}

export interface IProductSize {
  id: string;
  name: string;
  code: string;
  stock?: {
    quantity: number;
    colorId: string;
    sku: string;
  };
}

export interface IProduct {
  id: string;
  title: string;
  cateId: string;
  slug: string;
  price: string;
  oldPrice: string;
  stock: number;
  intro: string;
  description: string;
  preserve: string;
  star: number;
  sku: string;
  isNew: boolean;
  isBestSeller: boolean;
  createdAt: string;
  updatedAt: string;
  colors: IProductColor[];
  sizes: IProductSize[];
}

export interface IProductCart {
  name: string;
  id: string;
  quantity: number;
  image: string;
  size: {
    id: string;
    name: string;
    stock: number;
  };
  color: {
    id: string;
    name: string;
  };
  price: number;
  totalPriceBySku: number,
  sku: string;
}

export interface IResponseProductByCate {
  products: IProduct[];
}
