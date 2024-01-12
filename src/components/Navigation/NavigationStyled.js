import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

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

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};

    p {
      font-size: ${({ theme }) => theme.fontSizes.m};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
      line-height: ${({ theme }) => theme.lineHeights.normal};
    }
  }
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

export const SiteNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
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
