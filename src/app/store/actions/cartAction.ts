import { createAction, props } from '@ngrx/store';
import { productState } from '../state';

export const addCart = createAction('[addCart]',props<{cartProduct: productState}>())
export const plus = createAction('[plus]',props<{cartProduct: productState}>())
export const minus = createAction('[minus]',props<{cartProduct: productState}>())
export const buy = createAction('[buy]',props<{products: productState[]}>())


