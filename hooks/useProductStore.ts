import { IProduct, IProductCart, IProductColor, IProductSize } from '@/types/product';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IProductStore {
  total: number;
  products: IProductCart[];
  addToCart: (product: IProduct, color: IProductColor, size: IProductSize, quantity: number) => void;
  removeFromCart: (idCart: string) => void;
  onMinus: (product: IProductCart) => void;
  onPlus: (product: IProductCart) => void;
}

export const useProductStore = create(
  persist<IProductStore>(
    set => ({
      total: 0,
      products: [],
      addToCart: (product: IProduct, color: IProductColor, size: IProductSize, quantity: number) => {
        set((state: any) => {
          const transform = transformProduct(product, color, size, quantity);
          const foundIndex = state?.products?.findIndex((item: any) => item.sku === size?.stock?.sku);

          if (foundIndex !== -1) {
            const updatedProucts = [...state.products];
            updatedProucts[foundIndex].quantity += 1;
            updatedProucts[foundIndex].totalPriceBySku += Number(product.price);
            return { products: updatedProucts, total: countPrice(updatedProucts) };
          }
          const updatedProucts = [...state.products, transform];

          return { products: updatedProucts, total: countPrice(updatedProucts) };
        });
      },
      removeFromCart(sku: string) {
        set((state: any) => {
          const updatedProducts2 = state.products.filter((item: IProductCart) => item.sku !== sku);
          return { products: updatedProducts2 };
        });
      },
      onMinus(product: IProductCart) {
        set(state => {
          const foundIndex = state.products.findIndex((item: any) => item.sku === product.sku);
          if (foundIndex !== -1) {
            const cloneProducts = [...state.products];
            cloneProducts[foundIndex].quantity -= 1;
            cloneProducts[foundIndex].totalPriceBySku -= Number(product.price);
            return { products: cloneProducts, total: countPrice(cloneProducts) };
          }
          return state;
        });
      },
      onPlus(product: IProductCart) {
        set(state => {
          const foundIndex = state.products.findIndex((item: any) => item.sku === product.sku);
          if (foundIndex !== -1) {
            const cloneProducts = [...state.products];
            cloneProducts[foundIndex].quantity += 1;
            cloneProducts[foundIndex].totalPriceBySku += Number(product.price);
            return { products: cloneProducts, total: countPrice(cloneProducts) };
          }
          return state;
        });
      },
    }),
    {
      name: 'cart-products', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

export const transformProduct = (
  product: IProduct,
  color: IProductColor,
  size: IProductSize,
  quantity: number,
): IProductCart => {
  console.log({ product, color, size, quantity });
  return {
    id: product.id,
    name: product.title,
    color: {
      id: color.id,
      name: color.name || '',
    },
    image: color?.image?.imgProduct?.split(',')[0] || '',
    price: Number(product.price) * quantity,
    size: {
      id: size.id,
      name: size.name,
      stock: size?.stock?.quantity || 0,
    },
    quantity: quantity,
    sku: size?.stock?.sku || '',
    totalPriceBySku: Number(product.price),
  };
};

export const countPrice = (data: IProductCart[]) => {
  const totalPrice = data.reduce((accumulator, item) => {
    const itemPrice = Number(item.price) * item.quantity;
    return accumulator + itemPrice;
  }, 0);

  return totalPrice;
};
