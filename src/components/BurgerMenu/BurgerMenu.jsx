import React, { useState } from 'react';
import { WrapperDiv } from './BurgerMenuStyled';
import BurgerModalSide from './BurgerModal';
import Hamburger from './BurgerButton';
import { useModal } from '../ModalContext/ModalContextProvider';

const BurgerMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleModal = useModal();
  console.log(toggleModal);

  const toggleMenu = () => {
    setSidebarOpen(prev => !prev);

    // setModalOpen(false);
  };

  const closeBurgerMenu = () => {
    setSidebarOpen(false);

    // setModalOpen(false);
  };

  return (
    <WrapperDiv>
      <Hamburger onClick={toggleMenu} isModalOpen={isSidebarOpen} />
      {isSidebarOpen && (
        <BurgerModalSide
          show={isSidebarOpen}
          closeBurgerMenu={closeBurgerMenu}
        ></BurgerModalSide>
      )}
    </WrapperDiv>
  );
};

export default BurgerMenu;

// {
//   /* <BurgerModalSide show={status} /> */
// }

// <BurgerBtn onClick={() => setStatus(status => !status)}>
//   <BurgerSvg />
// </BurgerBtn>;

//Was in return
// <>
//   <BurgerBtn onClick={toggleMenu}>
//     <BurgerSvg />
//   </BurgerBtn>
// {
//   /* {isMenuOpen && (
//     <BurgerModalSide
//       isMenuOpen={isMenuOpen}
//       closeBurgerMenu={closeBurgerMenu}
//     >
//     </BurgerModalSide>
//   )} */
// }
// </>
