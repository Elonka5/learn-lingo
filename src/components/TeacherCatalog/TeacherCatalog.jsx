import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import TeacherCard from '../TeacherCard/TeacherCard';
import { LoadMoreBtn, TeachersList } from './TeacherCatalogStyled';

const TeacherCatalog = () => {
  const teachers = useSelector(state => state.teachers.teachersData);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleTeachers(prevState => prevState + 4);
  };

  return (
    <>
      <TeachersList>
        {teachers &&
          teachers
            .slice(0, visibleTeachers)
            .map(teacher => (
              <TeacherCard key={teacher.name} teacher={teacher} />
            ))}
      </TeachersList>
      {visibleTeachers < teachers.length && (
        <LoadMoreBtn onClick={loadMore}>Load More</LoadMoreBtn>
      )}
    </>
  );
};

export default TeacherCatalog;
