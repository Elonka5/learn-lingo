import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

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
