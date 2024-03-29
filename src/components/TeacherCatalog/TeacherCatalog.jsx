import { useDispatch, useSelector } from 'react-redux';
import TeacherCard from '../TeacherCard/TeacherCard';
import { TeachersList } from './TeacherCatalogStyled';
import { useEffect } from 'react';
import { loadUserFavoritesThunk } from '../../redux/Auth/AuthThunk';
import { selectAuthId } from '../../redux/selectors';

const TeacherCatalog = ({ teachers }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectAuthId);

  useEffect(() => {
    if (userId) {
      dispatch(loadUserFavoritesThunk(userId));
    }
  }, [dispatch, userId]);
  return (
    <TeachersList>
      {teachers.map(teacher => (
        <TeacherCard key={teacher.id} teacher={teacher} />
      ))}
    </TeachersList>
  );
};

export default TeacherCatalog;
