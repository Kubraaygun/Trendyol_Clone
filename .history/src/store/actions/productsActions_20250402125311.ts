import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducts',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.BEST_SELLER_PRODUCTS,
    );

    return response.data;
  },
);
const getPopularProducts = createAsyncThunk(
  'products/getPopularProducts',
  async (params: object) => {
    const response = await getRequest(params, PRODUCTS_URLS.POPULAR_PRODUCTS);

    return response.data;
  },
);

const getProductDetail = createAsyncThunk(
  'products/getProductDetail',
  async (id: number) => {
    const response = await getRequest(id, PRODUCTS_URLS.POPULAR_PRODUCTS);

    return response.data;
  },
);
export {getBestSellerProducts, getPopularProducts, getProductDetail};
