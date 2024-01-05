import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteTeacher } from '../../redux/selectors';

const FavoriteTeacher = () => {
  const teachers = useSelector(state => state.teachers.teachersData);
  const favoriteTeachers = useSelector(selectFavoriteTeacher);
  const dispatch = useDispatch();

  return <div>FavoriteTeacher</div>;
};

export default FavoriteTeacher;
