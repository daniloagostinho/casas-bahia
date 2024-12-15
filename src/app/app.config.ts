import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { productReducer } from './store/products/product.reducer';
import { cartReducer } from './store/cart/cart.reducer';
import { AppStoreModule } from './store/store.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      products: productReducer,
      cart: cartReducer,
    }),
    importProvidersFrom(AppStoreModule)
  ],
};
