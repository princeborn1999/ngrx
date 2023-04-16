import { createAction, props } from '@ngrx/store';
import { cartProduct } from '../model/productInterface';


export const addCart = createAction('[addCart]',props<{product: cartProduct[]}>())
