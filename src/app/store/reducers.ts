import { createReducer, on } from '@ngrx/store';
import { cartProduct } from '../model/productInterface';
import * as addCartAction from './actions'
import { product } from '../model/interface';

export const initailState: cartProduct[] = [];

export const reducers = createReducer(
  initailState,
  on(addCartAction.addCart, (state, action) => ({
    ...state,
    product: action.product
  }))
)
