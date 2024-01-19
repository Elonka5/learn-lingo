import styled from 'styled-components';
import { ReactComponent as IsStatus } from '../../assets/images/status.svg';
import { generateStatusColor } from '../../helpers/generateStatusColor';

export const TeacherStatus = styled(IsStatus)`
  position: absolute;
  top: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(4.5)};
  fill: ${generateStatusColor};
`;

export const Card = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(5)};
  border-radius: ${({ theme }) => theme.radii.card};
  position: relative;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(12)};
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(30)};
  border-radius: ${({ theme }) => theme.radii.round};
  border: ${({ theme }) =>
    `${theme.borders.large} ${theme.colors.secondGreen}`};

  img {
    width: ${({ theme }) => theme.spacing(24)};
    height: ${({ theme }) => theme.spacing(24)};
    border-radius: ${({ theme }) => theme.radii.round};
  }
`;

export const DescrTeacherWrapper = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    width: ${({ theme }) => theme.spacing(242)};
  }
`;

export const LangWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(3)};

  h3 {
    color: ${({ theme }) => theme.colors.secondaryFont};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 24px; /* 150% */
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
  }
  li {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      gap: ${({ theme }) => `${theme.spacing(3.5)} ${theme.spacing(7)}`};
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: start;
    gap: ${({ theme }) => theme.spacing(48)};
  }
`;

export const StyledTextLang = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */
  margin-right: ${({ theme }) => theme.spacing(4)};
`;

export const StyledSpan = styled.span`
  width: 0px;
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledPrice = styled.span`
  color: ${({ theme }) => theme.colors.textGreen};
`;

export const TitleName = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.ml};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px;
`;

export const TextTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */

  span {
    color: ${({ theme }) => theme.colors.primaryBlack};
  }
`;

export const DescriptionText = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px;
`;

export const AddMore = styled.button`
  border: ${({ theme }) => theme.borders.none};
  background-color: transparent;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  cursor: pointer;

  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const LessonWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  ul {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  li:first-child {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};

    span {
      text-decoration-line: underline;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};

    li {
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const LevelWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(8)};

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing(2)};

    & > li {
      display: flex;
      padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(3)}`};
      justify-content: center;
      align-items: center;
      gap: ${({ theme }) => theme.spacing(1)};
      font-weight: ${({ theme }) => theme.fontWeights.medium};
      line-height: 16px;
      border-radius: ${({ theme }) => theme.radii.large};
      border: ${({ theme }) => `${theme.borders.normal} ${theme.colors.grey}`};
    }

    li:first-child {
      background-color: ${({ theme }) => theme.colors.green};
      border: ${({ theme }) => theme.borders.none};
    }
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    ul {
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing(2)};
    }
  }
`;

export const BtnTrial = styled.button`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(11.5)}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.button};
  background-color: ${({ theme }) => theme.colors.green};
  border: ${({ theme }) => theme.borders.none};
`;

export const ExpText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 24px;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(3)};
  /* margin-bottom: ${({ theme }) => theme.spacing(4)}; */
`;

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  p {
    color: ${({ theme }) => theme.colors.secondaryFont};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 24px;
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const CommentText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */
`;

export const NameLangWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${({ theme }) => theme.spacing(2)};
    flex-direction: column;
  }
`;

export const BtnFavorite = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 26px;
  height: 26px;
  padding: 0;
  border: ${({ theme }) => theme.borders.none};
  background-color: transparent;
  cursor: pointer;

  & svg {
    width: 26px;
    height: 26px;
    margin-right: 0;
  }
`;
