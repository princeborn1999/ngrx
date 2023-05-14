import { createSelector } from '@ngrx/store';

export const selectProductState = (state: any) => state.coupon;
export const couponsSelector = createSelector(
  selectProductState,
  (state) => state.coupons
)
