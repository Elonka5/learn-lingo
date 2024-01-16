import React, { useState } from 'react';
import { BurgerBtn, BurgerSvg } from './BurgerMenuStyled';
import BurgerModalSide from './BurgerModal';

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeBurgerMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <BurgerBtn onClick={toggleMenu}>
        <BurgerSvg />
      </BurgerBtn>
      {isMenuOpen && (
        <BurgerModalSide
          isMenuOpen={isMenuOpen}
          closeBurgerMenu={closeBurgerMenu}
        >
        </BurgerModalSide>
      )}
    </>
  );
};

export default BurgerMenu;
