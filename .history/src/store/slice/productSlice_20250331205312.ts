import {createSlice} from '@reduxjs/toolkit';

const initialState: CounterState = {
  value: 0,
};

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});
export default productSlice.reducer;
