import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { animated } from 'react-spring';

export const WrapperBurgerModal = styled(animated.div)`
  background-color: ${({ theme }) => theme.colors.green};
  position: fixed;
  top: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => `${theme.spacing(40)} ${theme.spacing(3)}`};
  z-index: 1000;

  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const WrapperDiv = styled(animated.div)`
  @media screen and (min-width: 1440px) {
    display: flex;
    /* position: fixed; */
    height: 100%;
    width: 100%;
  }
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

export const BtnDiv = styled.div`
  position: relative;
  right: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transform-origin: 15px 15px;
  background-color: black;

  div {
    position: absolute;
    background: red;
    height: 6px;
    width: 30px;
    border-radius: 3px;
  }
`;
