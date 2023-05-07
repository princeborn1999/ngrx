import { createReducer, on } from '@ngrx/store';
import * as ProductActions from '../actions/productAction'
import { productList } from 'src/assets/mock/mockProducts';
import { appStateInterface } from '../state';
import { buy } from '../actions/cartAction';
import * as addCartAction from '../actions/cartAction'

export const initialState: appStateInterface = {
  // products: productList,
  products: [],
  cartProducts: [],
  checkoutProucts: []
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products
  })),
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
        changeCartCounts() :
        [...state.cartProducts, action.cartProduct]
    }
  }),
  on(addCartAction.plus, (state, action) => {
    const changeCartCounts = () => {
      return state.cartProducts.map(product => {
        if (product.productId === action.cartProduct.productId)
          return {
            ...product,
            productCount: action.cartProduct.productCount + 1,
          }
        return { ...product };
      });
    }

    return {
      ...state,
      cartProducts: changeCartCounts()
    }
  }),
  on(addCartAction.minus, (state, action) => {
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
      cartProducts: changeCartCounts()
    }
  }),
  on(addCartAction.goCheckout, (state, action) => {
    return {
      ...state,
      checkoutProucts: action.cartProducts
    }
  }),
  on(buy, (state, action) => {
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

    const cartProducts = () => {
      return state.cartProducts.filter(product =>
        buyListIds.indexOf(product.productId) === -1
      )
    }

    return {
      products: products(),
      cartProducts: cartProducts(),
      checkoutProucts: []
    }
  })
);
