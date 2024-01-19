import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/ukraine.svg';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  width: ${({ theme }) => theme.spacing(80)};
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(4)}`};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(192)};
    padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(16)}`};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) => theme.spacing(360)};
    padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(32)}`};
  }
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
