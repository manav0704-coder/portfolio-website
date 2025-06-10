import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container-custom flex-grow pt-28 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 