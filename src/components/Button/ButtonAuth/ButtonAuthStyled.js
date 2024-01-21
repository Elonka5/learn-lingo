import styled, { css } from 'styled-components';

export const BtnAuth = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.spacing(6)};
  padding-right: ${({ theme }) => theme.spacing(6)};
  border: ${({ theme }) => theme.borders.none};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 20px;
  cursor: pointer;
  transition: color 0.3s ease;

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(11)};
    font-size: ${({ theme }) => theme.fontSizes.ml};
  }

  @media screen and (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: ${({ theme }) => theme.colors.primaryBlack};
    gap: ${({ theme }) => theme.spacing(2)};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  ${({ $variant }) =>
    $variant === 'logout' &&
    css`
      gap: ${({ theme }) => theme.spacing(3)};

      @media screen and (min-width: 768px) {
        gap: ${({ theme }) => theme.spacing(8)};
      }
    `}
`;
