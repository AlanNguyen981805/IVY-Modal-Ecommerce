import { Sidebar } from '@/components';
import React from 'react';

interface IProps {
  children: React.ReactNode;
}
const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex gap-6 mt-6">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
