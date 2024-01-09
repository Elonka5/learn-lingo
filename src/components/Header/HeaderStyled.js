import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/ukraine.svg';
import { Link, NavLink } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';

export const HeaderWrapper = styled.div`
  width: ${({ theme }) => theme.spacing(360)};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(32)}`};
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
    font-size: ${({ theme }) => theme.fontSizes.sl};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    font-style: normal;
    line-height: ${({ theme }) => theme.lineHeights.normal};
    letter-spacing: -0.4px;
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

export const LogOutSvg = styled(FiLogOut)`
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
  border: ${({ theme }) => theme.borders.none};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const BtnRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  background: #121417;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: ${({ theme }) => theme.spacing(8.5)};
  width: ${({ theme }) => theme.spacing(20)};
  border-radius: ${({ theme }) => theme.radii.button};
  transition: background-color 300ms ease-in-out;

  &.active {
    color: ${({ theme }) => theme.colors.green};
    border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.green}`};
    border-radius: ${({ theme }) => theme.radii.button};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radii.button};
    background-position: 0;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.normal};
  }
`;
