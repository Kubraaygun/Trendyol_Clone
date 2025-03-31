import {createSlice} from '@reduxjs/toolkit';

const initialState: ProductsState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
