import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from './ContainerStyled';
import { useMediaQuery } from 'react-responsive';

const Container = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isFavorite = location.pathname === '/favorites';
  const isMobile = useMediaQuery({ maxWidth: 767.9 });
  const containerStyle = {
    padding: isMobile ? '16px' : isHome ? '0 64px 32px' : '30px 128px 96px',
    display: isFavorite ? 'flex' : 'block',
    justifyContent: isFavorite ? 'center' : 'initial',
    alignItems: isFavorite ? 'center' : 'initial',
  };

  return <ContainerStyled style={containerStyle}>{children}</ContainerStyled>;
};
export default Container;
