import React, { Suspense } from 'react';
import ModalContextProvider from '../ModalContext/ModalContextProvider';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ModalContextProvider>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </ModalContextProvider>
  );
};

export default Layout;
