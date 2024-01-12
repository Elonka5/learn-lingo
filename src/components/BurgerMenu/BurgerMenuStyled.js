import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const BurgerModal = styled.div`
  position: fixed;
  z-index: 200;
  min-width: ${({ theme }) => theme.spacing(75)};
  width: 100%;
  height: 100%;
  top: ${({ theme }) => theme.spacing(21)};
  left: ${({ theme }) => theme.spacing(0)};
  opacity: 1;
  pointer-events: all;
  backdrop-filter: blur(2px);
`;

export const BurgerBtn = styled.button`
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(8)};
  background: transparent;
  border: ${({ theme }) => theme.borders.none};
`;

export const BurgerSvg = styled(GiHamburgerMenu)`
  fill: ${({ theme }) => theme.colors.green};
  width: ${({ theme }) => theme.spacing(7)};
  height: ${({ theme }) => theme.spacing(7)};
`;

export const WrapperBurger = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing(9)};
  width: 60%;
  height: 100%;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
