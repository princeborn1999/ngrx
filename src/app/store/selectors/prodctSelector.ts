import { createSelector } from '@ngrx/store';

export const selectProductState = (state: any) => state.product;
export const productsSelector = createSelector(
  selectProductState,
  (state) => state.products
)
