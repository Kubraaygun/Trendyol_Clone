import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addChart: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setCategory} = cartSlice.actions;
export default cartSlice.reducer;
