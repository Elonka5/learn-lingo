import styled from 'styled-components';

export const StyledLabel = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const WrapperAvatarAndProfile = styled.div`
  width: ${({ theme }) => theme.spacing(63)};
  margin-top: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(95.5)};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) => theme.spacing(109.5)};
  }
`;
