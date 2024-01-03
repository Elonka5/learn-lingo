import { useModal } from '../ModalContext/ModalContextProvider';
import { NavLink } from 'react-router-dom';
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="teachers">Teachers</NavLink>
            </li>
            {isAuth && (
              <li>
                <NavLink to="favorites">Favorites</NavLink>
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
