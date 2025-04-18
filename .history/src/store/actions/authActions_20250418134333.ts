import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {AUTH_URLS, CATEGORIES_URLS} from '../../service/urls';
import {AUTHNAVIGATOR} from '../../utils/routes';

const userLogin = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const response = await getRequest(params, AUTH_URLS.LOGIN);
    return response.data;
  },
);

export {userLogin};
