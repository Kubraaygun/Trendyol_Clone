import {createSlice} from '@reduxjs/toolkit';
import {FavoriState} from '../../models/data/favoriteState';

const initialState: FavoriState = {
  favorites: [],
  pending: false,
  error: null,
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const product = action.payload;
      const existingProduct = state.favorites.find(
        item => item.id === product.id,
      );
      if (!existingProduct) {
      }
      state.favorites.push({...product, quantity: 1});
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state.cart.filter(item => item.id !== productId);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
  },
});

export const {addCart, removeFromCart} = favoriteSlice.actions;
export default favoriteSlice.reducer;
