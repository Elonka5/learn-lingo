import styled from 'styled-components';

export const ScrollButton = styled.button`
  position: fixed;
  right: ${({ theme }) => theme.spacing(1)};
  bottom: ${({ theme }) => theme.spacing(7.5)};
  border: ${({ theme }) => theme.borders.none};
  background: ${({ theme }) => theme.colors.green};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(0)};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.radii.round};
  width: ${({ theme }) => theme.spacing(17.5)};
  height: ${({ theme }) => theme.spacing(17.5)};

  & svg {
    color: #fff;
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};

    &:hover,
    &:focus {
      transform: rotate(220deg);
    }
  }
  @media screen and (min-width: 768px) {
    right: ${({ theme }) => theme.spacing(7.5)};
  }
`;
