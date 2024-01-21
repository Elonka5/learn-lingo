import Container from '../../components/Container/Container';
import FavoriteTeachersList from '../../components/FavoriteTeacherList/FavoriteTeachersList';

const Favorites = () => {
  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        <FavoriteTeachersList />
      </Container>
    </main>
  );
};

export default Favorites;
