import {createSlice} from '@reduxjs/toolkit';
import {ProductsState} from '../../models/data/productsState';
import {
  getAllProducts,
  getBestSellerProducts,
  getPopularProducts,
  getProductDetail,
} from '../actions/productsActions';

const initialState: ProductsState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  product: {},
  pending: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const existingProduct = state.bestSellerProducts.find(
        item => item.id === product.id,
      );
      if (existingProduct) {
        existingProduct.isFavorite = false;
        state.bestSellerProducts = state.bestSellerProducts.filter(
          item => item.id !== action.payload.id,
        );
      } else {
        state.favorites.push({...product, isFavorite: true});
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.pending = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })

      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.bestSellerProducts = action.payload;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.popularProducts = action.payload;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});
export const {addFavorite} = productSlice.actions;
export default productSlice.reducer;
