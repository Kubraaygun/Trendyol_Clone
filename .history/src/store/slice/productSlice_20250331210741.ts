import {createSlice} from '@reduxjs/toolkit';
import productSlice from '../slice/productSlice';

const initialState: ProductsState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
