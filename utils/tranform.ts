import { IProduct, IProductColor, IProductSize } from "@/types/product";

export const tranformColor = (colors: any) => {
  const tranformColor =  colors?.map((item: any) => `bg-[${item.code}]`);
//   return ['bg-[#7E9FAC]', 'bg-[#493D33]']
  return tranformColor
};

export const tranformCurrency = (num: string | number) => {
    return num?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  };

