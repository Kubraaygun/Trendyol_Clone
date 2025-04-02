import {createSlice} from '@reduxjs/toolkit';
import {CategoriesState} from '../../models/data/cagetoriesState';
import {getAllCategories} from '../actions/categoriesAction';

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: '',
  pending: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
