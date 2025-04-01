import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {getBestSellerProducts} from '../actions/productActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBestSellerProducts.fulfilled, (state, action) => {
      state.getBestSellerProducts = action.payload;
    });
  },
});
export default productSlice.reducer;
