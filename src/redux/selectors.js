//User
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.name;

export const selectFavoriteTeacher = state => state.favorite.favoriteList;
