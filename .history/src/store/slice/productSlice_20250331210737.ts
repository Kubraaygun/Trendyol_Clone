import {createSlice} from '@reduxjs/toolkit';
import productSlice from '../slice/productSlice';

const initialState: ProductsState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    prdoducts,
  },
});
export default productSlice.reducer;
