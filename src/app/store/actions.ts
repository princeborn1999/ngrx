import { createAction, props } from '@ngrx/store';
import { productInterface } from '../model/productInterface';

export const addCart = createAction('[addCart]',props<{cartProduct: productInterface}>())
export const buy = createAction('[buy]',props<{products: productInterface[]}>())
