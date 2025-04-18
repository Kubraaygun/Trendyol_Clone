import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesAction';
import {AuthState} from '../../models/data/authState';

const initialState: AuthState = {
  isLogin: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {setCategory} = authSlice.actions;
export default authSlice.reducer;
