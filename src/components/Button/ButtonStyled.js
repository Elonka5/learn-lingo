import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(5)}`};
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.button};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.large};
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondGreen};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(9.22)}`};
  }

  ${({ $variant }) =>
    $variant === 'book' &&
    css`
      padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(11.5)}`};
    `}

  ${({ $variant }) =>
    $variant === 'register' &&
    css`
      padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(6)}`};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primaryBlack};
      font-size: ${({ theme }) => theme.fontSizes.m};
      width: ${({ theme }) => theme.spacing(28)};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.green};
      }

      @media screen and (min-width: 768px) {
        padding: ${({ theme }) => `${theme.spacing(5)} ${theme.spacing(3)}`};
        font-size: ${({ theme }) => theme.fontSizes.ml};
        width: ${({ theme }) => theme.spacing(39)};
      }

      @media screen and (min-width: 1440px) {
        padding: ${({ theme }) =>
          `${theme.spacing(3.5)} ${theme.spacing(9.75)}`};
        font-size: ${({ theme }) => theme.fontSizes.l};
      }
    `}

      ${({ $variant }) =>
    $variant === 'modalbook' &&
    css`
      padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(27)}`};

      @media screen and (min-width: 768px) {
        padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(42)}`};
      }

      @media screen and (min-width: 1440px) {
        padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(50)}`};
      }
    `}
`;
