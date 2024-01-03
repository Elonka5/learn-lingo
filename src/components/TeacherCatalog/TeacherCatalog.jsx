import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import TeacherCard from '../TeacherCard/TeacherCard';

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
    <div>
      <ul>
        {teachers &&
          teachers
            .slice(0, visibleTeachers)
            .map(teacher => <TeacherCard key={teacher.id} teacher={teacher} />)}
      </ul>
      {visibleTeachers < teachers.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
};

export default TeacherCatalog;
