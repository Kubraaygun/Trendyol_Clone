import {createSlice} from '@reduxjs/toolkit';
import {CartState} from '../../models/data/cartState';

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};
export const cartSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({...product, quantity: 1});
      }
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    increaseQuantity: (state, action) => {
      const {id} = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item) item.quantity += 1;
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    decreaseQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item && item.quantity > 0) item.quantity -= 1;
      if (item.quantity === 0) state.cart = [];
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
    removeFromCart: (state, actiom) => {
      const productId = action.payload;
    },
  },
});

export const {addCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
