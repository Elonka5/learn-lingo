import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import {
  HeaderWrapper,
  LogoHeader,
  LogoWrapper,
  NavStyled,
} from './HeaderStyled';
import BurgerMenu from '../SideBar/SideBar/SideBar';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const isMobilesize = useMediaQuery({ query: '(max-width:1339.9px)' });
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(true);

  const closeBurgerMenu = () => {
    setBurgerMenuActive(!isBurgerMenuActive);
  };

  return (
    <header>
      <HeaderWrapper>
        <NavStyled>
          <LogoWrapper to="/">
            <LogoHeader />
            <p>LearnLingo</p>
          </LogoWrapper>
          {isMobilesize ? (
            <BurgerMenu />
          ) : (
            <Navigation closeBurgerMenu={closeBurgerMenu} />
          )}
        </NavStyled>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
