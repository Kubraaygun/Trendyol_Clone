import {createSlice} from '@reduxjs/toolkit';

const initialState: CounterState = {
  value: 0,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
export default productSlice.reducer;
