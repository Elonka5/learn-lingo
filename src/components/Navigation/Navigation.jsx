import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import { useModal } from '../ModalContext/ModalContextProvider';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import Button from '../Button/Button';
import {
  AuthWrapper,
  BtnLogIn,
  BtnWrapper,
  HomeSvg,
  LogInSvg,
  LogOutSvg,
  SiteNav,
  StyledNavLink,
  TeacherSvg,
  UserName,
  UserSvg,
} from './NavigationStyled';
import { IoMdHeart } from 'react-icons/io';
import { clearUserData } from '../../redux/Auth/AuthSlice';
import { useEffect } from 'react';

const Navigation = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  console.log(userName);
  const isEmail = useSelector(state => state.auth.email);
  console.log(isEmail);
  const dispatch = useDispatch();
  const toggleModal = useModal();

  useEffect(() => {
    if (!isAuth) {
      // Якщо користувач розлогінений, очистіть ім'я користувача
      // Можливо, також варто викликати clearUserData() тут
      dispatch(clearUserData());
    }
  }, [isAuth, dispatch]);

  const handleLogout = () => {
    dispatch(logoutThunk());
    closeBurgerMenu();
  };
  return (
    <>
      <SiteNav>
        <li>
          <HomeSvg />
          <StyledNavLink to="/" onClick={closeBurgerMenu}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <TeacherSvg />
          <StyledNavLink to="teachers" onClick={closeBurgerMenu}>
            Teachers
          </StyledNavLink>
        </li>
        {isAuth && (
          <li>
            <IoMdHeart fill="#fff" />
            <StyledNavLink to="favorites" onClick={closeBurgerMenu}>
              Favorites
            </StyledNavLink>
          </li>
        )}
      </SiteNav>

      {isAuth ? (
        <AuthWrapper>
          <UserName>
            <UserSvg />
            {`${userName}`}
          </UserName>
          <BtnLogIn style={{ gap: '18px' }} onClick={handleLogout}>
            <LogOutSvg />
            Logout
          </BtnLogIn>
        </AuthWrapper>
      ) : (
        <BtnWrapper>
          <BtnLogIn
            onClick={() => {
              closeBurgerMenu();
              toggleModal(<ModalLogIn size="medium" title="Log In" />);
            }}
          >
            <LogInSvg />
            Login
          </BtnLogIn>
          <Button
            text="Registration"
            variant="register"
            onClick={() => {
              closeBurgerMenu();
              toggleModal(
                <ModalRegistration size="medium" title="Registration" />
              );
            }}
          />
        </BtnWrapper>
      )}
    </>
  );
};

export default Navigation;
