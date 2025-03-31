import {createSlice} from '@reduxjs/toolkit';
import {CategoriesState} from '../../models/data/cagetoriesState';

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});
export default categoriesSlice.reducer;
