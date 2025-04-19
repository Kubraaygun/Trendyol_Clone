import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesAction';
import {AuthState} from '../../models/data/authState';
import {userLogin} from '../actions/authActions';
import {UserState} from '../../models/data/userState';

const initialState: UserState = {
  user: null,
  error: null,
  pending: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.pending = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.pending = false;
        state.isLogin = true;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
        state.isLogin = false;
      });
  },
});

export default userSlice.reducer;
