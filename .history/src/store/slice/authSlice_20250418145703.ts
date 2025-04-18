import {createSlice} from '@reduxjs/toolkit';
import {getAllCategories} from '../actions/categoriesAction';
import {AuthState} from '../../models/data/authState';
import { userLogin } from '../actions/authActions';

const initialState: AuthState = {
  isLogin: false,
  user: null,
  error: null,
  pending: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
.addCase(userLogin.pending, state=>{
state.pending=true;

}.addCase(userLogin.fulfilled,(state,action)=>{
  state.pending=false;
  state.isLogin=true;
  state.user=action.payload.data
})

)

  },
});

// export const {setCategory} = authSlice.actions;
export default authSlice.reducer;
