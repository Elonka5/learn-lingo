import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesTeachers } from '../../redux/Favorite/FavoriteThunk';
import TeacherCard from '../TeacherCard/TeacherCard';
import { FavoriteDiv, StyledNav, Title } from '../Hero/Hero.styled';
import favImg from '../../assets/images/favorite_img.png';
import { selectTeachersLoading } from '../../redux/selectors';
import Loader from '../Loader/Loader';
import { TeachersList } from '../TeacherCatalog/TeacherCatalogStyled';

const FavoriteTeachersList = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const favorites = useSelector(state => state.auth.favorites);
  const isLoading = useSelector(selectTeachersLoading);

  useEffect(() => {
    dispatch(getFavoritesTeachers(userId));
  }, [dispatch, userId]);

  const hasFavorites = Object.values(favorites).some(
    teacher => teacher && teacher[0]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : hasFavorites ? (
        <>
          <TeachersList>
            {Object.values(favorites).map(
              (teacher, index) =>
                teacher &&
                teacher[0] && (
                  <TeacherCard
                    style={{ width: '500px' }}
                    key={index}
                    teacher={teacher[0]}
                  ></TeacherCard>
                )
            )}
          </TeachersList>
        </>
      ) : (
        <FavoriteDiv>
          <Title style={{ textAlign: 'center', marginBottom: '0' }}>
            You don't have any favorite{' '}
            <span style={{ width: '168px' }}>teacher</span> yet
          </Title>{' '}
          <img src={favImg} alt="favorite_image" />
          <StyledNav to="/catalog" style={{ width: '240px' }}>
            Go to Catalog
          </StyledNav>
        </FavoriteDiv>
      )}
    </div>
  );
};

export default FavoriteTeachersList;
