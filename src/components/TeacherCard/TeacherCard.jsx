import { IoBookOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import {
  AddMore,
  BtnFavorite,
  Card,
  CommentText,
  CommentsWrapper,
  DescrTeacherWrapper,
  DescriptionText,
  ExpText,
  LangWrapper,
  LessonWrapper,
  LevelWrapper,
  NameLangWrapper,
  ReviewList,
  ReviewWrapper,
  StyledPrice,
  StyledSpan,
  StyledTextLang,
  TeacherStatus,
  TextTitle,
  TitleName,
  WrapperCard,
  WrapperImg,
} from './TeacherCardStyled';
import { useState } from 'react';
import { generateUniqueAvatar } from '../../helpers/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import ModalBookTrial from '../ModalBookTrial/ModalBookTrial';
import { useModal } from '../ModalContext/ModalContextProvider';
import Button from '../Button/Button';
import { toggleFavoriteTeacherThunk } from '../../helpers/handle';
import { selectIsLoggedIn } from '../../redux/selectors';
import Notiflix from 'notiflix';

const TeacherCard = ({ teacher }) => {
  const {
    name,
    id,
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

  const userId = useSelector(state => state.auth.userId);
  const isLogin = useSelector(selectIsLoggedIn);

  const toggleModal = useModal();
  const favorites = useSelector(state => state.auth.favorites);

  const isFavoriteTeach = favorites && favorites[teacher.id] !== undefined;

  const dispatch = useDispatch();

  const toggleDescription = () => {
    setShowMore(!showMore);
  };

  const handleDelete = () => {
    if (!isLogin) {
      Notiflix.Notify.warning(
        'Access to this action is restricted to authorized users only. Please log in to your account.'
      );
      return;
    }
    dispatch(toggleFavoriteTeacherThunk({ userId, teacher }));
  };

  return (
    <Card key={id}>
      <WrapperCard>
        <WrapperImg>
          <TeacherStatus />
          <img src={avatar_url} alt="avatar" />
        </WrapperImg>
        <DescrTeacherWrapper>
          <NameLangWrapper>
            <LangWrapper>
              <h3>Languages</h3>
              <ul>
                <li>
                  <IoBookOutline aria-label="book-icon" />
                  <StyledTextLang>Lessons online</StyledTextLang>
                  <StyledSpan>|</StyledSpan>
                </li>
                <li>
                  <StyledTextLang>Lessons done: {lessons_done} </StyledTextLang>
                  <StyledSpan>|</StyledSpan>
                </li>

                <li>
                  <FaStar fill="#FFC531" aria-label="star-icon" />
                  <StyledTextLang>Rating: {rating}</StyledTextLang>
                  <StyledSpan>|</StyledSpan>
                </li>

                <li>
                  <StyledTextLang>Price / 1 hour: </StyledTextLang>{' '}
                  <StyledPrice>{price_per_hour} $ </StyledPrice>
                </li>
              </ul>
            </LangWrapper>
            <TitleName>
              {name} {surname}
            </TitleName>
          </NameLangWrapper>
          <BtnFavorite onClick={handleDelete}>
            {isFavoriteTeach ? (
              <IoMdHeart fill="#FFC531" />
            ) : (
              <IoMdHeartEmpty />
            )}
          </BtnFavorite>
          <LessonWrapper>
            <ul>
              <DescriptionText>
                <TextTitle>
                  Speaks: <span> {languages.join(',')}</span>
                </TextTitle>
              </DescriptionText>
              <DescriptionText>
                <TextTitle>
                  Lesson Info:<span>{lesson_info}</span>
                </TextTitle>
              </DescriptionText>
              <DescriptionText>
                <TextTitle>
                  Conditions:<span>{conditions}</span>
                </TextTitle>
              </DescriptionText>
            </ul>
          </LessonWrapper>
          {showMore && (
            <>
              <ExpText>{experience}</ExpText>
              <div>
                <ReviewList>
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
                          <p style={{ color: '#121417' }}>
                            <FaStar fill="#FFC531" />
                            {review.reviewer_rating}.0
                          </p>
                        </CommentsWrapper>
                      </ReviewWrapper>
                      <CommentText>{review.comment}</CommentText>
                    </li>
                  ))}
                </ReviewList>
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
          {showMore && (
            <Button
              text="Book trial lesson"
              variant="book"
              type="button"
              onClick={() =>
                toggleModal(
                  <ModalBookTrial
                    style={{ overflowY: 'scroll' }}
                    variant="modalbook"
                    size="medium"
                    title="Book trial lesson"
                    name={name}
                    surname={surname}
                    avatar_url={avatar_url}
                    id={id}
                  />
                )
              }
            />
          )}
        </DescrTeacherWrapper>
      </WrapperCard>
    </Card>
  );
};

export default TeacherCard;
