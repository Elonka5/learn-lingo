import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   price_per_hour: '',
  languages: [],
  levels: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },

    clearFilter: () => {
      return initialState;
    },
  },
});
export const { setFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
