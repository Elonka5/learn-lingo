import React from 'react';
// import FavoriteTeacher from '../../components/FavoriteTeacher/FavoriteTeacher';
import Container from '../../components/Container/Container';
import FavoriteTeachersList from '../../components/FavoriteTeacherList/FavoriteTeachersList';

const Favorites = () => {
  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        {/* <FavoriteTeacher /> */}
        <FavoriteTeachersList />
      </Container>
    </main>
  );
};

export default Favorites;
