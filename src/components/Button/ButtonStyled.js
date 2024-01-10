import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 88px;
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.button};
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 20px; /* 155.556% */
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondGreen};
  }

  ${({ $variant }) =>
    $variant === 'book' &&
    css`
      padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(11.5)}`};
    `}

  ${({ $variant }) =>
    $variant === 'register' &&
    css`
      padding: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(9.75)}`};
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primaryBlack};

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.green};
      }
    `}

      ${({ $variant }) =>
    $variant === 'third' &&
    css`
      width: ${({ theme }) => theme.spacing(17.5)};
      height: ${({ theme }) => theme.spacing(7.5)};
    `}
`;

export const BtnRegister = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 39px;
  border: none;
  border-radius: ${({ theme }) => theme.radii.button};
  background: #121417;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;
