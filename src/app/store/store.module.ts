import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productReducer } from './products/product.reducer';
import { cartReducer } from './cart/cart.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      products: productReducer,
      cart: cartReducer,
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
})
export class AppStoreModule {}
