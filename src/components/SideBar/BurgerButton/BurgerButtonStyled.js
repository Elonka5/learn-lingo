import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerBMenu = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing(1.25)};
  height: ${({ theme }) => theme.spacing(6.5)};
  width: ${({ theme }) => theme.spacing(6.5)};
  cursor: pointer;
`;

export const BurgerBtn = styled(animated.div)`
  height: ${({ theme }) => theme.spacing(0.75)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
`;
