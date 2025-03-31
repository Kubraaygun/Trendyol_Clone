import {createSlice} from '@reduxjs/toolkit';
import {CategoriesState} from '../../models/data/cagetoriesState';
import {getAllCategories} from '../actions/categoriesAction';

const initialState: CategoriesState = {
  categories: [],
  pending: false,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCategories.pending, state => {
      state.pending = true;
    });
  },
});
export default categoriesSlice.reducer;
