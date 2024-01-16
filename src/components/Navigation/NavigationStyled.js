import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';

export const HomeSvg = styled(FaHome)`
  fill: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4.5)};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 1440px) {
    color: ${({ theme }) => theme.colors.primaryBlack};
  }
`;

export const UserSvg = styled(FaUserGraduate)`
  fill: ${({ theme }) => theme.colors.white};
`;

export const TeacherSvg = styled(GiTeacher)`
  fill: ${({ theme }) => theme.colors.white};
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(6)}`};

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: ${({ theme }) => theme.lineHeights.normal};
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};
    padding: 0;
  }
`;

export const BtnLogIn = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.spacing(7)};
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
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;

export const SiteNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(7)};
  margin-bottom: ${({ theme }) => theme.spacing(7)};
  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing(0)};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: 0 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    padding: 0;
  }
`;

export const LogInSvg = styled(FiLogIn)`
  stroke: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    stroke: ${({ theme }) => theme.colors.green};
  }
`;

export const LogOutSvg = styled(FiLogOut)`
  stroke: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    stroke: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  height: ${({ theme }) => theme.spacing(8.5)};
  width: ${({ theme }) => theme.spacing(20)};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.button};

  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 20px;

  &.active {
    border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.white}`};
    border-radius: ${({ theme }) => theme.radii.button};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    color: ${({ theme }) => theme.colors.primaryBlack};
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
  }
`;
