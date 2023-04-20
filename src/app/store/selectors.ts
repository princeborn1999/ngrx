import { createSelector } from '@ngrx/store';
import { appStateInterface } from '../model/appStateInterface';

export const selectFeature = (state: appStateInterface) => state;

export const cartProductsSelector = createSelector(
  selectFeature,
  (state) => {console.log('select state',state); return state.cartProducts}
)

export const testSelector = createSelector(
  selectFeature,
  (state) => { return state.test}
)
