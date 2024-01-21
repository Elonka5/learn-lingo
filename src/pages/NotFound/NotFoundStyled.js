import styled from 'styled-components';

export const BackgroundNotFound = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  height: 100%;
  padding: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => `${theme.spacing(14)} ${theme.spacing(16)}`};
  }
`;

export const WrapperNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: ${({ theme }) => `${theme.spacing(8)} ${theme.spacing(5)}
  `};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxml};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.green};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sl};
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(8)};
    padding: ${({ theme }) => `${theme.spacing(24)} ${theme.spacing(9)}
  `};
    h1 {
      font-size: ${({ theme }) => theme.fontSizes.xxxl};
      font-weight: ${({ theme }) => theme.fontWeights.bold};
    }
  }
`;
