import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';

const Layout = ({totalProductsCart}) => {
  return (
    <>
      <Header totalProductsCart={totalProductsCart} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
