import { createSelector } from '@ngrx/store';

export const selectCartState = (state: any) => state.cart;
export const cartProductsSelector = createSelector(
  selectCartState,
  (state) => state.cartProducts
)
