import React, { useEffect } from 'react';
import TeacherCatalog from '../../components/TeacherCatalog/TeacherCatalog';
import Container from '../../components/Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredTeachers } from '../../redux/selectors';
import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import SearchForm from '../../components/SearchForm/SearchForm';

const Teachers = () => {
  const filteredTeachers = useSelector(selectFilteredTeachers);
  console.log(filteredTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <main style={{ backgroundColor: '#F8F8F8' }}>
      <Container>
        <SearchForm />
        {filteredTeachers.length > 0 ? (
          <TeacherCatalog teachers={filteredTeachers} />
        ) : (
          <p>No teachers found. Please adjust your filter.</p>
        )}
      </Container>
    </main>
  );
};

export default Teachers;
