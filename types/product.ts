export interface IProductColor {
  id: string;
  name: string;
  code: string;
  isActive: boolean;
  image: {
    imgProduct: string;
  };
}

export interface IProductSize {
  id: string;
  name: string;
  code: string;
  stock: {
    quantity: number;
    colorId: string;
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

export interface IResponseProductByCate {
  products: IProduct[];
}
