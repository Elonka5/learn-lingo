import { IoBookOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import {
  AddMore,
  BtnTrial,
  Card,
  CommentsWrapper,
  DescrTeacherWrapper,
  DescriptionText,
  ExpText,
  LangWrapper,
  LessonWrapper,
  LevelWrapper,
  ReviewWrapper,
  StyledPrice,
  StyledSpan,
  TextTitle,
  TitleName,
  WrapperCard,
  WrapperImg,
} from './TeacherCardStyled';
import { useState } from 'react';
import { generateUniqueAvatar } from '../../helpers/Avatar';

const TeacherCard = ({ teacher }) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience,
  } = teacher;

  const [showMore, setShowMore] = useState(false);

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  return (
    <Card>
      <WrapperCard>
        <WrapperImg>
          <img src={avatar_url} alt="avatar" />
        </WrapperImg>
        <DescrTeacherWrapper>
          <LangWrapper>
            <p>Languages</p>
            <ul>
              <li>
                <IoBookOutline />
                Lessons online
              </li>
              <StyledSpan>|</StyledSpan>
              <li>Lessons done: {lessons_done}</li>
              <StyledSpan>|</StyledSpan>
              <li>
                <FaStar fill="#FFC531" />
                Rating: {rating}
              </li>
              <StyledSpan>|</StyledSpan>
              <li>
                Price / 1 hour: <StyledPrice>{price_per_hour}$</StyledPrice>
              </li>
            </ul>
            <button>
              <IoMdHeartEmpty />
            </button>
          </LangWrapper>
          <TitleName>
            {name} {surname}
          </TitleName>
          <LessonWrapper>
            <ul>
              <DescriptionText>
                <TextTitle>Speaks:</TextTitle>{' '}
                <p>
                  <span> {languages.join(', ')}</span>
                </p>
              </DescriptionText>
              <DescriptionText>
                <TextTitle>Lesson Info:</TextTitle>
                <p>{lesson_info}</p>
              </DescriptionText>
              <DescriptionText>
                <TextTitle>Conditions:</TextTitle> <p>{conditions}</p>
              </DescriptionText>
            </ul>
          </LessonWrapper>
          {showMore && (
            <>
              <ExpText>{experience}</ExpText>
              <div>
                <ul>
                  {reviews.map((review, index) => (
                    <li key={index}>
                      <ReviewWrapper>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: generateUniqueAvatar(
                              (index + 1) * Math.random()
                            ),
                          }}
                        />
                        <CommentsWrapper>
                          <p>{review.reviewer_name}</p>
                          <p>
                            <FaStar fill="#FFC531" />
                            {review.reviewer_rating}.0
                          </p>
                        </CommentsWrapper>
                      </ReviewWrapper>
                      <p>{review.comment}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
          <AddMore onClick={toggleDescription}>
            {showMore ? 'Show Less' : 'Read More'}
          </AddMore>

          <LevelWrapper>
            <ul>
              {levels.map((level, index) => (
                <li key={index}>#{level}</li>
              ))}
            </ul>
          </LevelWrapper>
          {showMore && <BtnTrial>Book trial lesson</BtnTrial>}
        </DescrTeacherWrapper>
      </WrapperCard>
    </Card>
  );
};

export default TeacherCard;
