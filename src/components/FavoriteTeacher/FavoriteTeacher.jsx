import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFavoriteTeacher,
  selectTeachersLoading,
} from '../../redux/selectors';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersList } from '../TeacherCatalog/TeacherCatalogStyled';
import { FavoriteDiv, StyledNav, Title } from '../Hero/Hero.styled';
import favImg from '../../assets/images/favorite_img.png';
import Loader from '../Loader/Loader';

const FavoriteTeacher = () => {
  const isFavorite = useSelector(selectFavoriteTeacher);
  const isLoading = useSelector(selectTeachersLoading);
  console.log(isFavorite);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isFavorite.length === 0 ? (
        <FavoriteDiv>
          <Title style={{ textAlign: 'center', marginBottom: '0' }}>
            You don't have any favorite <span>teacher</span> yet
          </Title>{' '}
          <img src={favImg} alt="hero_image" loading="lazy" />
          <StyledNav to="/catalog">Go to Catalog</StyledNav>
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
