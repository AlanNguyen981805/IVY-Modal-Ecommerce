import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const useQueryParams = <T = {}>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(Array.from(searchParams.entries()));

  function setQueryParams(params: Partial<T> | null) {
    if (!params) {
      return router.push(pathname);
    }
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, String(value));
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  }

  return { urlSearchParams, setQueryParams };
};
