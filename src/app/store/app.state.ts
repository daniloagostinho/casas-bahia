import { CartState } from "./cart/cart.reducer";
import { ProductState } from "./products/product.reducer";

export interface AppState {
  products: ProductState;
  cart: CartState;
}
