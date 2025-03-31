import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {CategoriesState} from '../../models/data/cagetoriesState';

const initialState: CategoriesState = {
  categories: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
