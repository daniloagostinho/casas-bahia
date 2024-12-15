import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { productReducer } from './store/products/product.reducer';
import { cartReducer } from './store/cart/cart.reducer';
import { AppStoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './store/products/product.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      products: productReducer,
      cart: cartReducer,
    }),
    provideEffects([ProductEffects]),
    importProvidersFrom(AppStoreModule),
    importProvidersFrom(HttpClientModule)
  ],
};
