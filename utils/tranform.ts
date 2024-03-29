import { SignJWT, jwtVerify } from "jose";

export const tranformColor = (colors: any) => {
  const tranformColor = colors?.map((item: any) => `bg-[${item.code}]`);
  //   return ['bg-[#7E9FAC]', 'bg-[#493D33]']
  return tranformColor;
};

export const tranformCurrency = (num: string | number) => {
  return num?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
};

export const transformToQueryString = (data?: { [key: string]: string | string[] | undefined }) => {
  if (!data) return '';
  const queryString = Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key] as string)}`)
    .join('&');
  return queryString;
};


export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode('secret_key')
      )
    ).payload as T;
  } catch (error) {
    console.log(error);
    throw new Error("Your token has expired.");
  }
}