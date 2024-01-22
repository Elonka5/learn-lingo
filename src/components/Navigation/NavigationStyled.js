import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { FaUserGraduate } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';

export const FavSvg = styled(IoMdHeart)`
  fill: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const HomeSvg = styled(FaHome)`
  fill: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
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
  font-size: ${({ theme }) => theme.fontSizes.m};

  @media screen and (min-width: 768px) {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.ml};
  }
  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-left: ${({ theme }) => theme.spacing(0)} !important;
    color: ${({ theme }) => theme.colors.primaryBlack};
  }
`;

export const UserSvg = styled(FaUserGraduate)`
  fill: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
  }
`;

export const TeacherSvg = styled(GiTeacher)`
  fill: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  flex-wrap: wrap;
  align-content: center;
  padding-left: ${({ theme }) => theme.spacing(2.5)};

  img {
    position: absolute;
    top: 10%;
    left: 38%;
    width: ${({ theme }) => theme.spacing(13.5)};
    height: ${({ theme }) => theme.spacing(13.5)};
    border-radius: ${({ theme }) => theme.radii.round};
  }

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(16)}`};
    justify-content: center;

    img {
      left: 46%;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};
    padding: 0;

    img {
      position: static;
    }
  }
`;

export const SiteNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  li {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(8.5)};
    li {
      gap: ${({ theme }) => theme.spacing(4)};
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing(0)};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5.5)};
  padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(3.5)}`};

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(16)}`};
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};
    padding: 0;
  }
`;

export const LogInSvg = styled(FiLogIn)`
  stroke: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
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
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
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
    width: ${({ theme }) => theme.spacing(30)};
    height: ${({ theme }) => theme.spacing(10)};
    font-size: ${({ theme }) => theme.fontSizes.ml};
    line-height: 20px;
  }

  @media screen and (min-width: 1440px) {
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-size: ${({ theme }) => theme.fontSizes.m};
    transition: background-color 300ms ease-in-out;
    height: ${({ theme }) => theme.spacing(8.5)};
    width: ${({ theme }) => theme.spacing(20)};

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

export const BtnSettings = styled.button`
  background-color: transparent;
  width: ${({ theme }) => theme.spacing(5)};
  height: ${({ theme }) => theme.spacing(5)};
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;
  position: relative;
  top: -30%;
  left: -3.5%;
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: 768px) {
    top: -36%;
    left: -2%;
    width: ${({ theme }) => theme.spacing(6)};
    height: ${({ theme }) => theme.spacing(6)};
    svg {
      width: ${({ theme }) => theme.spacing(6)};
      height: ${({ theme }) => theme.spacing(6)};
    }
  }

  @media screen and (min-width: 1440px) {
    position: static;
    svg {
      fill: ${({ theme }) => theme.colors.green};
      width: ${({ theme }) => theme.spacing(5)};
      height: ${({ theme }) => theme.spacing(5)};
    }
  }
`;

export const AvatarWrap = styled.div`
  position: relative;
`;
