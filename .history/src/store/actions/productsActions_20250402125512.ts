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
  async (params: object) => {
    const productUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, PRODUCTS_URLS.POPULAR_PRODUCTS);

    return response.data;
  },
);
export {getBestSellerProducts, getPopularProducts, getProductDetail};
