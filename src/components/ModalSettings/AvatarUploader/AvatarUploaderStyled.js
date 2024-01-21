import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const DropZoneContainer = styled.div`
  border: ${({ theme }) => `${theme.borders.medium} ${theme.colors.green}`};
  width: ${({ theme }) => theme.spacing(62)};
  border-radius: ${({ theme }) => theme.radii.button};
  padding: ${({ theme }) => theme.spacing(5)};
  text-align: center;
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    width: ${({ theme }) => theme.spacing(77.5)};
  }
`;

export const DropZoneText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.green};

  span {
    text-decoration: underline;
  }
`;
