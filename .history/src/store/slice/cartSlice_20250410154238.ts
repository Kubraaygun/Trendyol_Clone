import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
};
export const cartSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export const {setCategory} = cartSlice.actions;
export default cartSlice.reducer;
