import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from './ContainerStyled';

const Container = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isFavorite = location.pathname === '/favorites';
  const containerStyle = {
    padding: isHome ? '0px 64px 32px' : '30px 128px 96px',
    display: isFavorite ? 'flex' : 'block',
    justifyContent: isFavorite ? 'center' : 'initial',
    alignItems: isFavorite ? 'center' : 'initial',
  };

  return <ContainerStyled style={containerStyle}>{children}</ContainerStyled>;
};
export default Container;
