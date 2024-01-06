import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteTeacher } from '../../redux/selectors';
import heroImgWebp from '../../assets/images/hero_img_webp.webp';
import heroImgWebpRetina from '../../assets/images/hero_img_webp@2xmobile.webp';
import heroImg from '../../assets/images/hero_img.png';
import heroImgMobile from '../../assets/images/hero_img@2xmobile.png';
import { NavLink } from 'react-router-dom';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersList } from '../TeacherCatalog/TeacherCatalogStyled';

const FavoriteTeacher = () => {
  const isFavorite = useSelector(selectFavoriteTeacher);
  console.log(isFavorite);

  return (
    <>
      {isFavorite.length === 0 ? (
        <div>
          <picture>
            <source
              media="(min-width: 320px)"
              srcSet={`${heroImgWebp} 1x, ${heroImgWebpRetina} 2x`}
              type="image/webp"
            />
            <source
              media="(min-width: 320px)"
              srcSet={`${heroImg} 1x, ${heroImgMobile} 2x`}
              type="image/png"
            />
            <img src={heroImg} alt="hero_image" loading="lazy" />
          </picture>
          <p>
            {' '}
            No <span>teachers</span> found
          </p>{' '}
          <NavLink to="/catalog">Go to Catalog</NavLink>
        </div>
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
