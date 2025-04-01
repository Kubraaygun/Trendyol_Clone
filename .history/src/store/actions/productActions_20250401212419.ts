import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';

const getBestSellerProducs = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const response = await getRequest(params, CATEGORIES_URLS.CATEGORIES);
    return response.data;
  },
);
