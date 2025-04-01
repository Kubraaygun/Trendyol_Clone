import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts:[],
  popularProducts:[]
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:{builder => {
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

  }
});
export default productSlice.reducer;
