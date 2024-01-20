import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(4)}`};
  width: ${({ theme }) => theme.spacing(80)};

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(4)}`};
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) => theme.spacing(360)};
    padding: 0px 64px 32px;
    padding: ${({ theme }) =>
      `${theme.spacing(0)} ${theme.spacing(16)} ${theme.spacing(8)}`};
  }
`;
