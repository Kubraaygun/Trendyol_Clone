import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URLS} from '../../service/urls';

const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const response = await getRequest(params, CATEGORIES_URLS.CATEGORIES);
    console.log('categories acrion', response.datas);
    return response.data;
  },
);

export {getAllCategories};
