import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './services/styles/GlobalStyles';
import { lazy } from 'react';
import { Suspense } from 'react';
import Layout from './components/Layout/Layout';
import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';
import Loader from './components/Loader/Loader';
import React from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="teachers"
              element={
                <PublicRoute>
                  <Teachers />
                </PublicRoute>
              }
            />
            <Route
              path="favorites"
              element={
                <PrivateRoute component={<Favorites />} redirectTo="/" />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </Suspense>
    </>
  );
};

export default App;
