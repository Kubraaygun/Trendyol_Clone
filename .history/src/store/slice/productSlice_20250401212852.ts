import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import { getBestSellerProducs } from '../actions/productActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts:[],
  popularProducts:[]
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBestSellerProducs.pending, state => {
        state.pending = true;
      })
      .addCase(getBestSellerProducs.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getBestSellerProducs.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },

  }
});
export default productSlice.reducer;
