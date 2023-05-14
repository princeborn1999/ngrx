import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from '../../service/product.service';
import * as couponActions from '../actions/couponAction';
@Injectable()
export class CouponEffects {
  loadCoupons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(couponActions.loadCoupons),
      switchMap(() => {
        return this.productService.getCoupons().pipe(
          map(coupons => {
            return couponActions.loadCouponsSuccess({ coupons });
          }),
          catchError(error => of(couponActions.loadCouponsFailure({ error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }
}
