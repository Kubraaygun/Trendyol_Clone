import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, postRequest} from '../../service/verbs';
import {AUTH_URLS, CATEGORIES_URLS} from '../../service/urls';
import {AUTHNAVIGATOR} from '../../utils/routes';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  const response = await postRequest(params, AUTH_URLS.LOGIN);
  return response.data;
});

export {userLogin};
