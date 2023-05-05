import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/productAction'
import { productList } from 'src/assets/mock/mockProducts';
import { appStateInterface } from '../state';

export const initialState: appStateInterface = {
  // products: productList,
  products: [],
  cartProducts: []
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
      ...state,
      products
  }))
);
