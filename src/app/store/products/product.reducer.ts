import { createReducer, on } from '@ngrx/store';
import { loadProductsSuccess, searchProducts } from './product.actions';
import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[]; // Lista de produtos carregados
  searchTerm: string;  // Termo atual da busca
}

const initialState: ProductState = {
  products: [], // Inicialmente vazio
  searchTerm: '', // Nenhum termo de busca definido
};

export const productReducer = createReducer(
  initialState,
  // Atualiza o estado com os produtos carregados da API
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),
  // Atualiza o estado com o termo de busca
  on(searchProducts, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
  }))
);
