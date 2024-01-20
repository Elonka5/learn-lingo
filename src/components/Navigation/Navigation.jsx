import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserAvatar,
  selectUserName,
} from '../../redux/selectors';
import { useModal } from '../ModalContext/ModalContextProvider';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import Button from '../Button/Button';
import {
  AuthWrapper,
  BtnLogIn,
  BtnWrapper,
  FavSvg,
  HomeSvg,
  LogInSvg,
  LogOutSvg,
  SiteNav,
  StyledNavLink,
  TeacherSvg,
  UserName,
  UserSvg,
} from './NavigationStyled';
import { clearUserData } from '../../redux/Auth/AuthSlice';
import { useEffect } from 'react';
import ModalSettings from '../ModalSettings/ModalSettings';

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
            <UserName>
              <UserSvg aria-label="user_icon" />
              {`${userName}`}
            </UserName>
          )}
          {userAvatar && <img src={userAvatar} alt="user_avatar" />}
          <button
            onClick={() => {
              toggleModal(
                <ModalSettings size="medium" title="Your Settings" />
              );
            }}
          >
            Settings
          </button>
          <BtnLogIn style={{ gap: '18px' }} onClick={handleLogout}>
            <LogOutSvg aria-label="logout_icon" />
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
            <LogInSvg aria-label="login_icon" />
            Log In
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
