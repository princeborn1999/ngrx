import { createReducer, on } from '@ngrx/store';
import * as addCartAction from './actions'
import { appStateInterface } from '../model/appStateInterface';
import { productInterface } from '../model/productInterface';

export const initialState: appStateInterface = {
  products: [{
    productId: '1',
    productName: '商品A',
    productPrice: 90,
    productCount: 99,
    productDesc: '我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A我是商品A'
  }],
  cartProducts: []
};
// export const productReducer = createReducer(
//   initialState,
//   on(ProductActions.loadProductsSuccess, (state, { products }) =>({...state,
//     products
//   }))
// );

export const cartReducers = createReducer(
  initialState,
  on(addCartAction.addCart, (state, action) => {
    let cartProducts: productInterface[] = [];
    //TODO 待優化
    if (state.cartProducts.length &&
      state.cartProducts.some(product => product.productId === action.cartProduct.productId)) {
      cartProducts = state.cartProducts.map(product => ({
        ...product,
        productCount: +product.productCount + +action.cartProduct.productCount
      }));

      return {
        ...state,
        cartProducts: [...cartProducts]
      }
    }

    return {
      ...state,
      cartProducts: [action.cartProduct]
    }
  }),
  on(addCartAction.buy, (state, action) => {
    //TODO 待優化
    const buyListIds = action.products.map(list => list.productId);
    let products = state.products.map(product => {
      if (buyListIds.indexOf(product.productId) !== -1) {
        return {
          ...product,
          productCount: product.productCount - action.products[buyListIds.indexOf(product.productId)].productCount
        }
      } else {
        return product;
      }
    })

    return {
      ...state,
      products: products
    }
  })
)
