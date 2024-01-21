import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserAvatar,
  selectUserName,
} from '../../redux/selectors';
import { useModal } from '../ModalContext/ModalContextProvider';
import { useEffect } from 'react';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import {
  AuthWrapper,
  BtnSettings,
  BtnWrapper,
  FavSvg,
  HomeSvg,
  LogInSvg,
  LogOutSvg,
  SiteNav,
  StyledNavLink,
  TeacherSvg,
  UserName,
} from './NavigationStyled';
import { clearUserData } from '../../redux/Auth/AuthSlice';
import { IoSettingsSharp } from 'react-icons/io5';
import { calculateMargin } from '../../helpers/calculateMargin';
import ModalSettings from '../ModalSettings/ModalSettings';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import Button from '../Button/Button';
import ButtonAuth from '../Button/ButtonAuth/ButtonAuth';

const Navigation = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();
  const toggleModal = useModal();

  useEffect(() => {
    if (!isAuth) {
      dispatch(clearUserData());
    }
  }, [isAuth, dispatch]);

  useEffect(() => {}, [userName, userAvatar]);

  const handleLogout = () => {
    dispatch(logoutThunk());
    closeBurgerMenu();
  };
  return (
    <>
      <SiteNav>
        <li>
          <HomeSvg aria-label="home_icon" />
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <TeacherSvg aria-label="teacher_icon" />
          <StyledNavLink to="teachers">Teachers</StyledNavLink>
        </li>
        {isAuth && (
          <li>
            <FavSvg aria-label="favorite_icon" />
            <StyledNavLink to="favorites">Favorites</StyledNavLink>
          </li>
        )}
      </SiteNav>

      {isAuth ? (
        <AuthWrapper>
          {userName && (
            <UserName style={{ marginLeft: calculateMargin(userName) }}>
              {`${userName}`}
            </UserName>
          )}
          {userAvatar && <img src={userAvatar} alt="user_avatar" />}
          <BtnSettings
            onClick={() => {
              closeBurgerMenu();
              toggleModal(
                <ModalSettings
                  variant="modalsettings"
                  size="medium"
                  title="Settings"
                />
              );
            }}
          >
            <IoSettingsSharp aria-label="settings-icon" />
          </BtnSettings>
          <ButtonAuth variant="logout" onClick={handleLogout} text="Logout">
            <LogOutSvg aria-label="logout_icon" />
          </ButtonAuth>
        </AuthWrapper>
      ) : (
        <BtnWrapper>
          <ButtonAuth
            onClick={() => {
              closeBurgerMenu();
              toggleModal(<ModalLogIn size="medium" title="Log In" />);
            }}
            text="Log In"
          >
            <LogInSvg aria-label="login_icon" />
          </ButtonAuth>
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
