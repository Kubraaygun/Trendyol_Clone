import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';
import {Params} from '../../models/data/productsState';

const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: object) => {
    const productsUrl =
      params.category == 'Tümü'
        ? PRODUCTS_URLS.ALL_PRODUCTS
        : `${PRODUCTS_URLS.CATEGORY_PRODUCTS}/${params.category}`;
    const response = await getRequest(params, productsUrl);
    return response.data;
  },
);

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
  async (params: Params) => {
    const productsUrl = `${PRODUCTS_URLS.ALL_PRODUCTS}/${params.id}`;
    const response = await getRequest(params, productsUrl);
    return response.data;
  },
);
export {
  getBestSellerProducts,
  getPopularProducts,
  getProductDetail,
  getAllProducts,
};
