import {Product} from '../data/productsState';

interface CounterProps {
  quantity: number;
  product: Product;
  process: 'increase' | 'decrease';
}
export type {CounterProps};
