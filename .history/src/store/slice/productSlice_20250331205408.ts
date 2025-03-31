import {createSlice} from '@reduxjs/toolkit';

const initialState: CounterState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
