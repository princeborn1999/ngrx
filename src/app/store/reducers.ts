import { createReducer, on } from '@ngrx/store';
import * as addCartAction from './actions'
import * as ProductActions from './actions'
import { appStateInterface } from '../model/appStateInterface';
import { productInterface } from '../model/productInterface';
import { productList } from 'src/assets/mock/mockProducts';


export const initialState: appStateInterface = {
  // products: productList,
  products: [],
  cartProducts: []
};
export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) =>{
    console.log('Products updated:', products);
    return {
      ...state,
      products
    };
  })
);

export const cartReducers = createReducer(
  initialState,
  on(addCartAction.addCart, (state, action) => {
    const hasSameProduct = state.cartProducts.length &&
      state.cartProducts.some(product => product.productId === action.cartProduct.productId);

    const changeCartCounts = () => {
      return state.cartProducts.map(product => {
        if (product.productId === action.cartProduct.productId)
          return {
            ...product,
            productCount: +product.productCount + +action.cartProduct.productCount
          };
        return { ...product };
      });
    }

    return {
      ...state,
      cartProducts: hasSameProduct ?
        [...changeCartCounts()] :
        [...state.cartProducts, action.cartProduct]
    }
  }),
  on(addCartAction.plus, (state, action) => {
    const changeCartCounts = () => {
      return state.cartProducts.map(product => {
        if (product.productId === action.cartProduct.productId)
          return {
            ...product,
            productCount: action.cartProduct.productCount + 1
          };
        return { ...product };
      });
    }

    return {
      ...state,
      cartProducts: [...changeCartCounts()]
    }
  }),
  on(addCartAction.reduce, (state, action) => {
    const changeCartCounts = () => {
      return state.cartProducts.map(product => {
        if (product.productId === action.cartProduct.productId)
          return {
            ...product,
            productCount: action.cartProduct.productCount - 1
          };
        return { ...product };
      });
    }

    return {
      ...state,
      cartProducts: [...changeCartCounts()]
    }
  }),
  on(addCartAction.buy, (state, action) => {
    const buyListIds = action.products.map(list => list.productId);
    const products = () => {
      return state.products.map(product => {
        if (buyListIds.indexOf(product.productId) !== -1)
          return {
            ...product,
            productCount: product.productCount - action.products[buyListIds.indexOf(product.productId)].productCount
          }
        return product;
      })
    }
    return {
      ...state,
      products: products()
    }
  })
)
