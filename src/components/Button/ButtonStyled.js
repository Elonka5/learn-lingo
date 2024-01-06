import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing(2)};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({ size }) =>
    size === 'small' &&
    `
    width: ${({ theme }) => theme.spacing(4)};
  `}

  ${({ color }) =>
    color === 'red' &&
    `
    background-color: red;
  `}
`;
