import styled from 'styled-components';

export const Card = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: ${({ theme }) => theme.radii.card};
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: ${({ theme }) => theme.spacing(242)};
`;

export const LangWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  p {
    color: ${({ theme }) => theme.colors.secondaryFont};
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 24px; /* 150% */
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(4)};
  }
  li {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: 24px; /* 150% */
  }
  svg {
    margin-right: ${({ theme }) => theme.spacing(2)};
  }
  button {
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
  }
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
  margin-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const TextTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */
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
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ul {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  li {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(1)};

    span {
      text-decoration-line: underline;
    }
  }
`;

export const LevelWrapper = styled.div`
  margin-bottom: 32px;

  ul {
    display: flex;
    flex-direction: row;
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
  margin-bottom: ${({ theme }) => theme.spacing(4)};
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
`;

export const CommentText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 24px; /* 150% */
`;
