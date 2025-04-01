import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {getBestSellerProducts} from '../actions/productsActions';

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
      state.bestSellerProducts = action.payload;
    });
  },
});
export default productSlice.reducer;
