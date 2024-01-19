import React from 'react';
import { useSpring } from 'react-spring';
import Navigation from '../Navigation/Navigation';
import { WrapperBurgerModal } from './BurgerMenuStyled';

const BurgerModalSide = ({ show, closeBurgerMenu }) => {
  const { left } = useSpring({
    from: { left: '-100%' },
    left: show ? '0' : '-100%',
  });
  return (
    <WrapperBurgerModal style={{ left: left }}>
      <Navigation closeBurgerMenu={closeBurgerMenu} />
    </WrapperBurgerModal>
  );
};

export default BurgerModalSide;
