import { createSelector } from '@reduxjs/toolkit';

//User
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.name;

export const selectFavoriteTeacher = state => state.favorite.favoriteList;

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
