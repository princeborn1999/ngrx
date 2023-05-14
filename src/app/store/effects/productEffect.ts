import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../service/product.service';
import * as ProductActions from '../actions/productAction';
@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() => {
        return this.productService.getProducts().pipe(
          map(products => {
            return ProductActions.loadProductsSuccess({ products });
          }),
          catchError(error => of(ProductActions.loadProductsFailure({ error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
