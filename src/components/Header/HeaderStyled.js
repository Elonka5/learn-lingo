import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/ukraine.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

export const HeaderWrapper = styled.div`
  width: ${({ theme }) => theme.spacing(360)};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.space[5]}px
    ${({ theme }) => theme.space[10]}px;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.4px;
    margin-right: 130px;
  }
`;

export const LogoHeader = styled(LogoIcon)`
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};
`;

export const LogInSvg = styled(FiLogIn)`
  stroke: ${({ theme }) => theme.colors.green};
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
`;

export const SiteNav = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const BtnLogIn = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
`;

export const BtnRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border: none;
  gap: 8px;
  border-radius: 12px;
  background: #121417;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px; /* 125% */
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryBlack};
  text-decoration: none;
  height: 40px;
  width: 80px;

  &.active {
    color: ${({ theme }) => theme.colors.green};
    border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.green}`};
    border-radius: ${({ theme }) => theme.radii.button};
  }

  &:hover {
    /* Додайте інші стилі, які вам потрібні для стану hover */
  }
`;
