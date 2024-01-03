import styled from 'styled-components';
import { modalSizes } from '../../constants/modalSizes';

const getSize = (size, screen) => modalSizes[screen][size];

export const DivModalBox = styled.div`
  color: #000;
  background-color: #fff;
  width: 280px;
  padding: ${({ $size }) => ($size === 'small' ? '32px 24px' : '32px 12px')};
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: ${({ $size }) => getSize($size, 'md')}px;
    padding: 20px 20px 64px 64px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: ${({ $size }) => getSize($size, 'xl')}px;
  }
`;

export const DivTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xsl};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    letter-spacing: -0.8px;
    margin-top: ${({ theme }) => theme.spacing(11)};
  }

  svg {
    width: ${({ theme }) => theme.spacing(8)};
    height: ${({ theme }) => theme.spacing(8)};
    cursor: pointer;
  }
`;
