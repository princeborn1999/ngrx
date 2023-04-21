import { createSelector } from '@ngrx/store';
import { appStateInterface } from '../model/appStateInterface';

export const selectFeature = (state: any) => state;
export const selectProducts = (state: any) => state.products;

export const cartProductsSelector = createSelector(
  selectFeature,
  (state) => state.cart.cartProducts
)

export const productsSelector = createSelector(
  selectFeature,
  (state) => state.cart.products
)

export const testSelector = createSelector(
  selectFeature,
  (state) => { return state.test}
)
