import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(3.5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};

  img {
    height: ${({ theme }) => theme.spacing(11)};
    width: ${({ theme }) => theme.spacing(11)};
    flex-shrink: 0;
    border-radius: ${({ theme }) => theme.radii.round};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};

    p {
      color: ${({ theme }) => theme.colors.secondaryFont};
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      line-height: 16px; /* 133.333% */
    }

    & > p:nth-child(2) {
      color: ${({ theme }) => theme.colors.primaryBlack};
      font-size: ${({ theme }) => theme.fontSizes.m};
      line-height: 24px; /* 150% */
    }
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(118)};
`;

export const StyledInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};

  padding-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const StyledPasswordDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ReasonText = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing(5)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(95)};
  }
`;

export const WrapperRadioBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(4.5)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const RadioInput = styled(Field)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: relative;
`;

export const StyledLabel = styled.label`
  position: relative;
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
  line-height: 1.37;
  cursor: pointer;
  padding-left: ${({ theme }) => theme.spacing(7.5)};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: ${({ theme }) => theme.spacing(5)};
    height: ${({ theme }) => theme.spacing(5)};
    border: ${({ theme }) => `${theme.borders.mSolid} ${theme.colors.green}`};
    border-radius: ${({ theme }) => theme.radii.round};
  }

  &.checked ${RadioInput}::before {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.green};
    content: '';
    width: ${({ theme }) => theme.spacing(2.5)};
    height: ${({ theme }) => theme.spacing(2.5)};
    border-radius: ${({ theme }) => theme.radii.round};
    top: ${({ theme }) => theme.spacing(-2.5)};
    left: ${({ theme }) => theme.spacing(-6.25)};
  }
`;

export const StyledWrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.spacing(62)};

  @media screen and (min-width: 768px) {
    width: ${({ theme }) => theme.spacing(95)};
  }

  @media screen and (min-width: 1440px) {
  }
`;
