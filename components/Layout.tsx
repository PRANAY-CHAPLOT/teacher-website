import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-cream text-dark dark:bg-[#0F0F0F] dark:text-[#E0E0E0] transition-colors duration-500">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};