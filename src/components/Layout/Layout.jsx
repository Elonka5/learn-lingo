import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ModalContextProvider from '../ModalContext/ModalContextProvider';
import Header from '../Header/Header';

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
