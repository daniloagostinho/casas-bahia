import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess, searchProducts } from './product.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[];
  searchTerm: string;
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      title: 'Geladeira Frost Free 350L',
      description: 'Geladeira moderna com alta eficiência energética.',
      price: 1999.90,
      imageUrl: 'https://imgs.casasbahia.com.br/55066470/1g.jpg'
    },
    {
      id: '2',
      title: 'Smart TV 55" 4K',
      description: 'Imagem incrível com qualidade 4K.',
      price: 2999.99,
      imageUrl: 'https://imgs.casasbahia.com.br/55066185/1g.jpg'
    },
    {
      id: '3',
      title: 'Notebook i5 8GB SSD 256GB',
      description: 'Ideal para trabalho e estudos.',
      price: 3499.00,
      imageUrl: 'https://imgs.casasbahia.com.br/1546366805/1xg.jpg'
    }
  ],
  searchTerm: '',
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  on(searchProducts, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);