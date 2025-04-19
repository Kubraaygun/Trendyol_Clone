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
