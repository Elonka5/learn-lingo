import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors';
import { useModal } from '../ModalContext/ModalContextProvider';
import { logoutThunk } from '../../redux/Auth/AuthThunk';
import { removeFromFavorite } from '../../redux/Favorite/FavoriteSlice';
import ModalLogIn from '../ModalLogin/ModalLogIn';
import ModalRegistration from '../ModalRegistration/ModalRegistration';
import Button from '../Button/Button';
import {
  AuthWrapper,
  BtnLogIn,
  BtnWrapper,
  LogInSvg,
  LogOutSvg,
  SiteNav,
  StyledNavLink,
} from './NavigationStyled';

const Navigation = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const toggleModal = useModal();

  const handleLogout = () => {
    dispatch(logoutThunk());
    dispatch(removeFromFavorite());
    closeBurgerMenu();
  };

  return (
    <>
      <SiteNav>
        <li>
          <StyledNavLink to="/" onClick={closeBurgerMenu}>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="teachers" onClick={closeBurgerMenu}>
            Teachers
          </StyledNavLink>
        </li>
        {isAuth && (
          <li>
            <StyledNavLink to="favorites" onClick={closeBurgerMenu}>
              Favorites
            </StyledNavLink>
          </li>
        )}
      </SiteNav>

      {isAuth ? (
        <AuthWrapper>
          <p>{`${userName}`}</p>
          <BtnLogIn onClick={handleLogout}>
            <LogOutSvg />
            Log Out
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
