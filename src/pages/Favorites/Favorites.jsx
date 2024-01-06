import React from 'react';
import FavoriteTeacher from '../../components/FavoriteTeacher/FavoriteTeacher';
import Container from '../../components/Container/Container';

const Favorites = () => {
  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        <FavoriteTeacher />
      </Container>
    </main>
  );
};

export default Favorites;
