import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContainerStyled } from './ContainerStyled';

const Container = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const containerStyle = {
    padding: isHome ? '0px 64px 32px' : '0px 128px 96px',
  };

  return <ContainerStyled style={containerStyle}>{children}</ContainerStyled>;
};

export default Container;
