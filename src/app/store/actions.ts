import { createAction, props } from '@ngrx/store';
import { productInterface } from '../model/productInterface';

export const addCart = createAction('[addCart]',props<{cartProduct: productInterface}>())
export const buy = createAction('[buy]',props<{products: productInterface[]}>())

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: any[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);
