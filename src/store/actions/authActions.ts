import {createAsyncThunk} from '@reduxjs/toolkit';
import {postRequest} from '../../service/verbs';
import {AUTH_URLS} from '../../service/urls';


const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
  

    return response.data;
  } catch (error) {
    return error;
  }
});

export {userLogin};
