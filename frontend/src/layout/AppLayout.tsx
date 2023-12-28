import { FC, ReactNode } from 'react';
import Header from './Header';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default AppLayout;
