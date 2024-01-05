import styled from 'styled-components';

export const TeachersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-top: ${({ theme }) => theme.spacing(16)};
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(12)}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.button};
  background-color: ${({ theme }) => theme.colors.green};
  border: ${({ theme }) => theme.borders.none};
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 28px; /* 155.556% */
`;
