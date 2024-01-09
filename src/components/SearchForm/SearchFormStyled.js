import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const LabWrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  min-width: 124px;

  p {
    color: ${({ theme }) => theme.colors.secondaryFont};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 18px; /* 128.571% */
  }
`;
