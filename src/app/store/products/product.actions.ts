import { Product } from '@app/models/product.model';
import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Product List] Load Products');
export const loadProductsSuccess = createAction(
  '[Product List] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product List] Load Products Failure',
  props<{ error: string }>()
);

export const searchProducts = createAction(
  '[Product List] Search Products',
  props<{ searchTerm: string }>()
);
