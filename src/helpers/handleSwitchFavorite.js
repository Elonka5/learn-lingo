import {
  addFavorite,
  removeFromFavorite,
} from '../redux/Favorite/FavoriteSlice';
import Notiflix from 'notiflix';

export const handleSwitchFavorite = (
  isAuth,
  isFavorite,
  dispatch,
  teacherData
) => {
  if (isAuth) {
    if (isFavorite.some(el => el.id === teacherData.id)) {
      dispatch(removeFromFavorite(teacherData));
    } else {
      dispatch(addFavorite(teacherData));
    }
  } else {
    Notiflix.Notify.warning(
      'Access to this action is restricted to authorized users only. Please log in to your account.'
    );
  }
};
