import { createReducer, on } from '@ngrx/store';
import * as addCartAction from './actions'
import { product } from '../model/interface';
import { appStateInterface } from '../model/appStateInterface';

export const initailState: appStateInterface = {
  products: [],
  cartProducts: [],
  test: 0
};

export const cartReducers = createReducer(
  initailState,
  on(addCartAction.addCart, (state, action) => {
    console.log('cartReducers')
    console.log('state',state)
    console.log('action',action)
    let obj = action.cartProduct;


    return {
    ...state,
    cartProducts: obj
  }}),
  on(addCartAction.test, (state, action) => {
    // console.log('cartReducers')
    // console.log('state',state)
    // console.log('action',action)


    return {
    ...state,
    cartProducts: action.test
  }})
)
