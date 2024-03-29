import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.name;
export const selectAuthLoading = state => state.auth.isLoading;
export const selectAuthId = state => state.auth.userId;
export const selectUserFavorite = state => state.auth.favorites;
export const selectUserAvatar = state => state.auth.photoURL;

export const selectTeachersLoading = state => state.teachers.isLoading;

export const selectFilter = state => state.filter;

export const selectTeachers = state => state.teachers.teachersData;

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilter],
  (teachers, filter) => {
    const { levels, languages, price_per_hour } = filter;

    if (
      (!levels || levels.length === 0) &&
      (!languages || languages.length === 0) &&
      !price_per_hour
    ) {
      return teachers;
    }

    return teachers.filter(
      teacher =>
        (!levels ||
          levels.length === 0 ||
          levels.every(selectedLevel =>
            teacher.levels.includes(selectedLevel)
          )) &&
        (!languages ||
          languages.length === 0 ||
          languages.every(selectedLanguage =>
            teacher.languages.includes(selectedLanguage)
          )) &&
        (!price_per_hour || teacher.price_per_hour === price_per_hour)
    );
  }
);
