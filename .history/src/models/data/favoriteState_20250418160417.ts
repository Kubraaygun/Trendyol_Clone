import {Product} from './productsState';

interface FavoriState {
  favorite: Product[];
  pending: boolean;
  error: any;
}
export type {FavoriState};
