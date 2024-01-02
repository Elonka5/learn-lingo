import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/images/ukraine.svg';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: ${({ theme }) => theme.spacing(296)};
  margin-left: auto;
  margin-right: auto;
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
  }
`;

export const LogoHeader = styled(LogoIcon)`
  width: 28px;
  height: 28px;
`;
