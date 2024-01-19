import { useSelector } from 'react-redux';
import {
  selectFavoriteTeacher,
  selectTeachersLoading,
} from '../../redux/selectors';
import { TeachersList } from '../TeacherCatalog/TeacherCatalogStyled';
import { FavoriteDiv, StyledNav, Title } from '../Hero/Hero.styled';
import TeacherCard from '../TeacherCard/TeacherCard';
import favImg from '../../assets/images/favorite_img.png';
import Loader from '../Loader/Loader';

const FavoriteTeacher = () => {
  const isFavorite = useSelector(selectFavoriteTeacher);
  const isLoading = useSelector(selectTeachersLoading);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isFavorite.length === 0 ? (
        <FavoriteDiv>
          <Title style={{ textAlign: 'center', marginBottom: '0' }}>
            You don't have any favorite{' '}
            <span style={{ width: '168px' }}>teacher</span> yet
          </Title>{' '}
          <img src={favImg} alt="favorite_image" loading="lazy" />
          <StyledNav to="/catalog" style={{ width: '288px' }}>
            Go to Catalog
          </StyledNav>
        </FavoriteDiv>
      ) : (
        <TeachersList>
          {isFavorite.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </TeachersList>
      )}
    </>
  );
};

export default FavoriteTeacher;
