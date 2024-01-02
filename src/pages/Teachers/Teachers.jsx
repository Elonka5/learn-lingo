import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/Teachers/TeachersThunk';
import TeacherCard from '../../components/TeacherCard/TeacherCard';

const Teachers = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(state => state.teachers.teachersData);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {teachers &&
          teachers.map(teacher => (
            <TeacherCard key={Date.now() * Math.random()} teacher={teacher} />
          ))}
      </ul>
    </div>
  );
};

export default Teachers;
