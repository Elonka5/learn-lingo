import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesTeachers } from '../redux/Favorite/FavoriteThunk';
import TeacherCard from './TeacherCard/TeacherCard';

const FavoriteTeachersList = () => {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);
  const favorites = useSelector(state => state.auth.favorites);

  useEffect(() => {
    dispatch(getFavoritesTeachers(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>Улюблені вчителі:</h2>
      <ul>
        {Object.values(favorites).map(
          (teacher, index) =>
            teacher &&
            teacher[0] && (
              <TeacherCard
                style={{ width: '500px' }}
                key={index}
                teacher={teacher[0]}
              ></TeacherCard>
            )
        )}
      </ul>
    </div>
  );
};

export default FavoriteTeachersList;
