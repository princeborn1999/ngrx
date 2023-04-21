import { createSelector } from '@ngrx/store';
import { appStateInterface } from '../model/appStateInterface';

export const selectFeature = (state: any) => state;
let count = 0;
export const cartProductsSelector = createSelector(
  selectFeature,
  (state) => {console.log('select state',state);
  console.log('state.cart.cartProducts',state.cart.cartProducts)

  return state.cart.cartProducts}
)

export const testSelector = createSelector(
  selectFeature,
  (state) => {console.log('select state',state); count++; return count}
)

export const productsSelector = createSelector(
  selectFeature,
  (state) => state.cart.products
)
