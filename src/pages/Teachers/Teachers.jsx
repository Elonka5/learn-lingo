import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilteredTeachers,
  selectTeachersLoading,
} from '../../redux/selectors';
import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import { LoadMoreBtn } from '../../components/TeacherCatalog/TeacherCatalogStyled';
import TeacherCatalog from '../../components/TeacherCatalog/TeacherCatalog';
import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import Loader from '../../components/Loader/Loader';
import ButtonToTop from '../../components/Button/ButtonToTop/ButtonToTop';

const Teachers = () => {
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const filteredTeachers = useSelector(selectFilteredTeachers);
  const isLoading = useSelector(selectTeachersLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleTeachers(prevState => prevState + 4);
  };

  const handleFilterChange = useCallback(() => {
    setVisibleTeachers(4);
  }, []);

  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        <SearchForm onFilterChange={handleFilterChange} />
        {isLoading ? (
          <Loader />
        ) : filteredTeachers.length > 0 ? (
          <>
            <TeacherCatalog
              teachers={filteredTeachers.slice(0, visibleTeachers)}
            />
            {visibleTeachers < filteredTeachers.length && (
              <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
            )}
          </>
        ) : (
          <p>No teachers found. Please adjust your filter.</p>
        )}
      </Container>
      <ButtonToTop />
    </main>
  );
};

export default Teachers;
