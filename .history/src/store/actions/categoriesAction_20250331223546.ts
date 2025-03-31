import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';

const getAllCategories = createAsyncThunk(
  'categories/getAllCategories',
  async params => {
    const response = await getRequest(params);
  },
);
