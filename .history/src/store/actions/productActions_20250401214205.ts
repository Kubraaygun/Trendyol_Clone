import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URLS} from '../../service/urls';

const getBestSellerProducts = createAsyncThunk(
  'products/getBestSellerProducs',
  async (params: object) => {
    const response = await getRequest(
      params,
      PRODUCTS_URLS.BEST_SELLER_PRODUCTS,
    );
    console.log(response.data);
    return response.data;
  },
);

export {getBestSellerProducts};
