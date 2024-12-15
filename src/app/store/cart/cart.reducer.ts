import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';
import { Product } from '../../models/product.model';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    items: [...state.items, product],
  })),
  on(removeFromCart, (state, { productId }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== productId),
  }))
);
