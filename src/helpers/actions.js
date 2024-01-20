// import {
//   addFavoriteTeacherThunk,
//   removeFavoriteTeacherThunk,
// } from '../redux/Auth/AuthThunk';
// import {
//   addFavorite,
//   removeFromFavorite,
// } from '../redux/Favorite/FavoriteSlice';

// export const addFavoriteTeacher = async (dispatch, userId, teacherData) => {
//   try {
//     dispatch(addFavoriteTeacherThunk({ userId, teacher: teacherData }));

//     dispatch(addFavorite(teacherData));
//   } catch (error) {
//     console.error('Error adding favorite teacher:', error);
//   }
// };

// export const removeFavoriteTeacher = async (dispatch, userId, teacherData) => {
//   try {

//     await dispatch(
//       removeFavoriteTeacherThunk({ userId, teacher: teacherData })
//     );

//     dispatch(removeFromFavorite({ id: teacherData }));
//   } catch (error) {
//     console.error('Error removing favorite teacher:', error);
//   }
// };
