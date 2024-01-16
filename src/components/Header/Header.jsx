import {
  HeaderWrapper,
  LogoHeader,
  LogoWrapper,
  NavStyled,
} from './HeaderStyled';
import { useMediaQuery } from 'react-responsive';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  const isMobilesize = useMediaQuery({ query: '(max-width:1339.9px)' });

  return (
    <header>
      <HeaderWrapper>
        <NavStyled>
          <LogoWrapper to="/">
            <LogoHeader />
            <p>LearnLingo</p>
          </LogoWrapper>
          {isMobilesize ? <BurgerMenu /> : <Navigation />}
        </NavStyled>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
