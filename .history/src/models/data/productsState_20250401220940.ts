interface Rating {
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: object;
}

interface ProductsState {
  products: Product[];
  bestSellerProducts: Product[];
  popularProducts: Product[];
}
export type {ProductsState, Product};
