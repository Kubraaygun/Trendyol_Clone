import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {setCategory} = cartSlice.actions;
export default cartSlice.reducer;
