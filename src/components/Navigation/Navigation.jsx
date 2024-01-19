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
import AvatarUploader from '../ModalSettings/AvatarUploader';

const Navigation = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(state => state.auth.photoURL);
  console.log(userAvatar);

  const dispatch = useDispatch();
  const toggleModal = useModal();

  useEffect(() => {
    if (!isAuth) {
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
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <TeacherSvg />
          <StyledNavLink to="teachers">Teachers</StyledNavLink>
        </li>
        {isAuth && (
          <li>
            <FavSvg />
            <StyledNavLink to="favorites">Favorites</StyledNavLink>
          </li>
        )}
      </SiteNav>

      {isAuth ? (
        <AuthWrapper>
          <UserName>
            <UserSvg />
            {`${userName}`}
          </UserName>
          <img src={userAvatar} alt="user_avatar" />
          <button
            onClick={() => {
              toggleModal(
                <AvatarUploader size="medium" title="Your Settings" />
              );
            }}
          >
            Settings
          </button>
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
