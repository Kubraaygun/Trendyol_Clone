import {createAsyncThunk} from '@reduxjs/toolkit';

const getBestSellerProducs = createAsyncThunk(
  'categories/getAllCategories',
  async (params: object) => {
    const response = await getRequest(params, CATEGORIES_URLS.CATEGORIES);
    return response.data;
  },
);
