import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import FloatingWhatsApp from '../FloatingWhatsApp';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;
