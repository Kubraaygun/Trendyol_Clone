import {createSlice} from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
