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
  extraReducers: builder => {},
});

export const {setCategory} = authSlice.actions;
export default authSlice.reducer;
