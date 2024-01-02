import React from 'react';
import { useModal } from '../ModalContext/ModalContextProvider';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import {
  HeaderWrapper,
  LogoHeader,
  LogoWrapper,
  NavStyled,
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="teachers">Teachers</NavLink>
          {isAuth && <NavLink to="favorites">Favorites</NavLink>}
        </NavStyled>

        <div>
          {isAuth ? (
            <>
              <p>{`Hello ${userName}`}</p>
              <button onClick={handleLogout}>Exit</button>
            </>
          ) : (
            <>
              <button
                onClick={() =>
                  toggleModal(<ModalLogIn size="medium" title="Log In" />)
                }
              >
                Log In
              </button>
              <button
                onClick={() =>
                  toggleModal(
                    <ModalRegistration size="medium" title="Registration" />
                  )
                }
                type="button"
              >
                Registration
              </button>
            </>
          )}
        </div>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
