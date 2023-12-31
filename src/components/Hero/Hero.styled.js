import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
`;

export const TitleWrapper = styled.div`
  padding: ${({ theme }) => theme.space[8]}px ${({ theme }) => theme.space[9]}px
    ${({ theme }) => theme.space[8]}px ${({ theme }) => theme.space[7]}px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
  border-radius: ${({ theme }) => theme.radii.medium};
  width: ${({ theme }) => theme.spacing(180)};

  p {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 22px; /* 137.5% */
    letter-spacing: -0.32px;
    width: ${({ theme }) => theme.spacing(117)};
    margin-bottom: ${({ theme }) => theme.space[7]}px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 56px; /* 116.667% */
  letter-spacing: -0.96px;
  width: ${({ theme }) => theme.spacing(137)};
  margin-bottom: ${({ theme }) => theme.space[6]}px;

  span {
    display: inline-flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-style: italic;
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 56px;
    background-color: ${({ theme }) => theme.colors.secondGreen};
    border-radius: ${({ theme }) => theme.radii.small};
    height: ${({ theme }) => theme.spacing(10)};
    width: ${({ theme }) => theme.spacing(48)};
  }
`;

export const StyledNav = styled(Link)`
  display: inline-flex;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(22)}`};
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.radii.button};

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 28px; /* 155.556% */
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondGreen};
  }
`;

export const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;
