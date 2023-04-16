import { createSelector } from '@ngrx/store';
import { appStateInterface } from '../model/appStateInterface';

export const selectFeature = (state: appStateInterface) => state.cartProduct;

export const cartProductSelector = createSelector(
  selectFeature,
  (state) => state
)
