import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

export const selectSearchTerm = createSelector(
  selectProductState,
  (state) => state.searchTerm
);

export const selectFilteredProducts = createSelector(
  selectAllProducts,
  selectSearchTerm,
  (products, searchTerm) =>
    products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
);
