import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setCategory} = cartSlice.actions;
export default cartSlice.reducer;
