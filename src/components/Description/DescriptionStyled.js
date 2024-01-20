import styled from 'styled-components';

export const DescrWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.medium};
  border: ${({ theme }) => `${theme.borders.medium} ${theme.colors.green}`};
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(9)}`};
  gap: ${({ theme }) => theme.spacing(8)};

  li {
    display: flex;
    gap: ${({ theme }) => theme.spacing(4)};
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    align-items: center;
    flex-wrap: wrap;
    width: ${({ theme }) => theme.spacing(328)};
    height: ${({ theme }) => theme.spacing(29)};
    padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(30)}`};
    gap: ${({ theme }) => theme.spacing(25)};
  }
`;

export const TitleDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 32px; /* 114.286% */
  letter-spacing: -0.56px;
`;

export const TextDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondaryBlack};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
  width: ${({ theme }) => theme.spacing(18.5)};
`;
