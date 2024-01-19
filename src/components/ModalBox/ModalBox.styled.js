import styled, { css } from 'styled-components';
import { modalSizes } from '../../constants/modalSizes';

const getSize = (size, screen) => modalSizes[screen][size];

export const DivModalBox = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlack};
  background-color: ${({ theme }) => theme.colors.white};
  width: 280px;
  padding: ${({ $size }) => ($size === 'small' ? '32px 24px' : '32px 12px')};
  border-radius: ${({ theme }) => theme.radii.medium};
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    width: ${({ $size }) => getSize($size, 'md')}px;
    padding: ${({ theme }) =>
      `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(
        16
      )} ${theme.spacing(16)}`};
  }
  @media screen and (min-width: 1440px) {
    width: ${({ $size }) => getSize($size, 'xl')}px;
    /* overflow-y: scroll;
    height: 100%; */
    transform: translateX(-0%) translateY(0%);
  }

  ${({ $variant }) =>
    $variant === 'modalbook' &&
    css`
      height: 100%;
      overflow-y: scroll;

      @media screen and (min-width: 1440px) {
        height: 90%;
      }
    `}

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(2)};
    border-radius: ${({ theme }) => theme.radii.small};
    background-color: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radii.small};
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
