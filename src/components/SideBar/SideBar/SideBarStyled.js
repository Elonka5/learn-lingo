import styled from 'styled-components';
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
    height: 100%;
    width: 100%;
  }
`;
