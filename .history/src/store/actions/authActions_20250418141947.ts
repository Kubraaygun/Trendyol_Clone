import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/verbs';
import {AUTH_URLS, CATEGORIES_URLS} from '../../service/urls';
import {AUTHNAVIGATOR} from '../../utils/routes';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  try {
    const response = await postRequest(params, AUTH_URLS.LOGIN);
    console.log(response);
    return response.data;
  } catch (error) {}
});

export {userLogin};
