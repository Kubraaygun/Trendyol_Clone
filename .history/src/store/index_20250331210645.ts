import {configureStore} from '@reduxjs/toolkit';
import {ProductsState} from '../models/data/productsState';

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
