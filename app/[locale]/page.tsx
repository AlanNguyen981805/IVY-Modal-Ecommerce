import { Header } from '@/components';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  children: React.ReactNode;
}
export default function Home({ children }: IProps) {
  const t = useTranslations('Index');

  return (
    <main className="">
      {/* <p>{t('title')}</p>
      <Link  href="/vi" locale="vi">
        Tieng viet
      </Link>
      <br />
      <Link href="/en" locale="en">
        tieng anh
      </Link>
      <br /> */}
      <Header />
      {children}
    </main>
  );
}
