import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(109.5)};

  button {
    display: flex;
    padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(40)}`};
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: ${({ theme }) => theme.radii.button};
    border: ${({ theme }) => theme.borders.none};
    cursor: pointer;

    color: ${({ theme }) => theme.colors.primaryBlack};
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 28px; /* 155.556% */
  }
`;

export const StyledInput = styled.input`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(4.5)}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid ${({ theme }) => theme.colors.inputBorder};
  margin-bottom: ${({ marginBottom, theme }) => theme.spacing(marginBottom)};
  appearance: none;
  outline: none;
`;

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.rgbaBlack};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 22px; /* 137.5% */
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;
