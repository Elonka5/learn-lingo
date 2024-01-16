import styled from 'styled-components';

export const BackgroundNotFound = styled.div`
  background-color: ${({ theme }) => theme.colors.secondBackground};
  height: 100%;
  padding: ${({ theme }) => `${theme.spacing(23)} ${theme.spacing(50)}`};
`;

export const WrapperNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  padding: ${({ theme }) => `${theme.spacing(24)} ${theme.spacing(9)};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  `};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.green};
    /* margin-bottom: ${({ theme }) => theme.spacing(6)}; */
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sl};
    text-align: center;
  }
`;
