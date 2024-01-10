import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(109.5)};
`;

export const StyledInput = styled(Field)`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(4.5)}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.button};
  border: 1px solid
    ${({ theme, $error }) =>
      $error ? theme.colors.red : theme.colors.inputBorder};

  width: ${({ theme }) => theme.spacing(109.5)};
  appearance: none;
  outline: none;

  ::placeholder {
    color: ${({ $error, theme }) =>
      $error ? theme.colors.star : theme.colors.red};
    transition: color 0.3s ease-in-out;
  }
`;

export const ModalText = styled.p`
  color: ${({ theme }) => theme.colors.rgbaBlack};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 22px; /* 137.5% */
  margin-top: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(12.5)};
  left: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.red};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 18px;
`;

export const Btn = styled.button`
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
`;

export const ToggleBtn = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing(4.5)};
  top: ${({ theme }) => theme.spacing(4.25)};
  background-color: transparent;
  border: ${({ theme }) => theme.borders.none};

  & svg {
    cursor: pointer;
  }
`;

export const WrapperInput = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(4.5)};
`;
