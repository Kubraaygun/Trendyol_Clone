import {Product} from './productsState';

interface FavoriState {
  favorites: Product[];
  pending: boolean;
  error: any;
}
export type {FavoriState};
