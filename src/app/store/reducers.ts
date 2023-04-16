import { createReducer, on } from '@ngrx/store';
import * as addCartAction from './actions'
import { product } from '../model/interface';
import { appStateInterface } from '../model/appStateInterface';

export const initailState: appStateInterface = {
  products: [],
  cartProducts: []
};

export const reducers = createReducer(
  initailState,
  on(addCartAction.addCart, (state, action) => ({
    ...state,
    cartProducts: action.cartProduct
  }))
)
