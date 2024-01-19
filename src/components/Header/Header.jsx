import {
  HeaderWrapper,
  LogoHeader,
  LogoWrapper,
  NavStyled,
} from './HeaderStyled';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

const Header = () => {
  const isMobilesize = useMediaQuery({ query: '(max-width:1339.9px)' });
  const [isBurgerMenuActive, setBurgerMenuActive] = useState(true);

  const closeBurgerMenu = () => {
    setBurgerMenuActive(false);
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
