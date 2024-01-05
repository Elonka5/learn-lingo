import { useModal } from '../ModalContext/ModalContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import {
  BtnLogIn,
  BtnRegister,
  BtnWrapper,
  HeaderWrapper,
  LogInSvg,
  LogoHeader,
  LogoWrapper,
  NavStyled,
  SiteNav,
  StyledNavLink,
} from './HeaderStyled';

const Header = () => {
  const isAuth = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <header>
      <HeaderWrapper>
        <NavStyled>
          <LogoWrapper to="/">
            <LogoHeader />
            <p>LearnLingo</p>
          </LogoWrapper>
          <SiteNav>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="teachers">Teachers</StyledNavLink>
            </li>
            {isAuth && (
              <li>
                <StyledNavLink to="favorites">Favorites</StyledNavLink>
              </li>
            )}
          </SiteNav>

          {isAuth ? (
            <>
              <p>{`Hello ${userName}`}</p>
              <button onClick={handleLogout}>Exit</button>
            </>
          ) : (
            <BtnWrapper>
              <BtnLogIn
                onClick={() =>
                  toggleModal(<ModalLogIn size="medium" title="Log In" />)
                }
              >
                <LogInSvg />
                Log In
              </BtnLogIn>
              <BtnRegister
                onClick={() =>
                  toggleModal(
                    <ModalRegistration size="medium" title="Registration" />
                  )
                }
              >
                Registration
              </BtnRegister>
            </BtnWrapper>
          )}
        </NavStyled>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
