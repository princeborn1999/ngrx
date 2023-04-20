import { createReducer, on } from '@ngrx/store';
import * as addCartAction from './actions'
import { product } from '../model/interface';
import { appStateInterface } from '../model/appStateInterface';

export const initailState: appStateInterface = {
  products: [],
  cartProducts: []
};

export const cartReducers = createReducer(
  initailState,
  on(addCartAction.addCart, (state, action) => {
    console.log('cartReducers')
    console.log('state',state)
    console.log('action',action)

    return {
    ...state,
    cartProducts: action.cartProduct
  }})
)
