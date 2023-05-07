import { createSelector } from '@ngrx/store';

export const selectProductState = (state: any) => state.product;
export const productsSelector = createSelector(
  selectProductState,
  (state) => state.products
)

export const cartProductsSelector = createSelector(
  selectProductState,
  (state) => state.cartProducts
)

export const checkoutProductsSelector = createSelector(
  selectProductState,
  (state) => state.checkoutProucts
)
