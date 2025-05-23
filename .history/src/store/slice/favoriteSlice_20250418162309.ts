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
      if (existingProduct) {
        existingProduct.isFavorite = false;
      } else {
        state.favorites.push({...product, isFavorite: true});
      }
    },
  },
});

export const {addFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
