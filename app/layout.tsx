import { Montserrat } from 'next/font/google';

import { Footer, Header } from '@/components';

import './globals.css';
import Providers from '@/utils/react-query/provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const inter = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});
export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html className={inter.className}>
      <body className={' container m-auto'}>
        <Providers>
          <Header />
          <div className="mt-24">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
