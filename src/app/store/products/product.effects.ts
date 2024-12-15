// src/app/store/products/product.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts), // Ouve a ação `loadProducts`
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })), // Emite a ação de sucesso
          catchError((error) =>
            of(loadProductsFailure({ error })) // Emite a ação de falha
          )
        )
      )
    )
  );
}
