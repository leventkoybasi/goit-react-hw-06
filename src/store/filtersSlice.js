import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchTerm: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = filtersSlice.actions;
export default filtersSlice.reducer;
