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
    const { levels } = filter;

    if (!levels || levels === '') {
      return teachers;
    }

    const filteredTeachers = teachers.filter(teacher =>
      levels.every(selectedLevel => teacher.levels.includes(selectedLevel))
    );

    return filteredTeachers;
  }
);
