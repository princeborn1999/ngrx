import { createAction, props } from "@ngrx/store";
import { coupon } from "src/app/model/interface";

export const loadCoupons = createAction('[load coupons]');
export const loadCouponsSuccess = createAction(
  '[load coupons success]',
  props<{ coupons: coupon[] }>());

export const loadCouponsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);
