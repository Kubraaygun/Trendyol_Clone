import {createSlice} from '@reduxjs/toolkit';

const initialState: CounterState = {
  products: 0,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
