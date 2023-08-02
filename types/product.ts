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
  id?: string;
  colorId: string;
  quantity: number;
  sku: string;
  size?: {
    id: string;
    name: string;
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
  isFavorite?: string;
  description: string;
  preserve: string;
  star: number;
  sku: string;
  isNew: boolean;
  isBestSeller: boolean;
  createdAt: string;
  updatedAt: string;
  colors: IProductColor[];
  listSizes: IProductSize[];
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
  totalPriceBySku: number;
  sku: string;
}

export interface IResponseProductByCate {
  products: {
    rows: IProduct[];
  }
}
