import {
  addFavorite,
  removeFromFavorite,
} from '../redux/Favorite/FavoriteSlice';

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
    alert('You should be signed');
  }
};
