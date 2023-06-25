import { createReducer, on } from '@ngrx/store';
import * as couponActions from '../actions/couponAction'
import { productList } from 'src/assets/mock/mockProducts';
import { appStateInterface } from '../state';
import { buy } from '../actions/cartAction';
import * as addCartAction from '../actions/cartAction'
import { coupon } from 'src/app/model/interface';

export const initialState = {
  coupons: [] as coupon[]
};

export const couponReducer = createReducer(
  initialState,
  on(couponActions.loadCouponsSuccess, (state, { coupons }) => (
    {
      ...state,
      coupons
    }
  )))
