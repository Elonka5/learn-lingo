import React, { useState } from 'react';
import { WrapperDiv } from './SideBarStyled';
import BurgerModalSide from '../SideBarSide';
import BurgerButton from '../BurgerButton/BurgerButton';

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeBurgerMenu = () => {
    setSidebarOpen(false);
  };

  return (
    <WrapperDiv>
      <BurgerButton onClick={toggleMenu} isModalOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <BurgerModalSide
          show={isSidebarOpen}
          closeBurgerMenu={closeBurgerMenu}
        ></BurgerModalSide>
      )}
    </WrapperDiv>
  );
};

export default SideBar;
