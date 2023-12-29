import styled from 'styled-components';
import { modalSizes } from '../../constants/modalSizes';

const getSize = (size, screen) => modalSizes[screen][size];

export const DivModalBox = styled.div`
  color: #000;
  background-color: #fff;
  width: 280px;
  padding: ${({ $size }) => ($size === 'small' ? '32px 24px' : '32px 12px')};
  border-radius: 30px;

  h3 {
    color: var(--primary-black);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1;
  }

  @media screen and (min-width: 768px) {
    width: ${({ $size }) => getSize($size, 'md')}px;
    padding: 12px 14px;
    border-radius: 10px;
  }
  @media screen and (min-width: 1440px) {
    width: ${({ $size }) => getSize($size, 'xl')}px;
  }
`;

export const DivTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  h2 {
    color: var(--primary-black);
    font-size: 26px;
    font-weight: 500;
    line-height: 1.23;
  }
`;
