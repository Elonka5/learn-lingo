import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.borders.none};
  border-radius: ${({ theme }) => theme.radii.button};
  background: #121417;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px; /* 125% */
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.green};
  }
`;
