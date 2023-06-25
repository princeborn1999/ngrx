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

    const changeCartCounts = () => (
      state.cartProducts.map(product => (
        product.productId === action.cartProduct.productId ?
          {
            ...product,
            productCount: +product.productCount + +action.cartProduct.productCount
          } :
          product
      )))

    const addProducts = () => ([...state.cartProducts, action.cartProduct])

    return {
      ...state,
      cartProducts: hasSameProduct ?
        changeCartCounts() :
        addProducts()
    }
  }),
  on(addCartAction.plus, (state, action) => {
    const changeCartCounts = () => (
      state.cartProducts.map(product => (
        product.productId === action.cartProduct.productId ?
          {
            ...product,
            productCount: +action.cartProduct.productCount + 1,
          } :
          product
      )))

    return {
      ...state,
      cartProducts: changeCartCounts()
    }
  }),
  on(addCartAction.minus, (state, action) => {
    const changeCartCounts = () => (
      state.cartProducts.map(product => (
        product.productId === action.cartProduct.productId ?
          {
            ...product,
            productCount: +action.cartProduct.productCount - 1
          } :
          product
      )))

    return {
      ...state,
      cartProducts: changeCartCounts()
    }
  }),
  on(addCartAction.deleteProdct, (state, action) => {
    const cartProducts = state.cartProducts.filter(product =>
      product.productId !== action.cartProduct.productId)

    return {
      ...state,
      cartProducts: cartProducts
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
    const cartProducts = () => (state.cartProducts.filter(product =>
      buyListIds.indexOf(product.productId) === -1))

    return {
      ...state,
      cartProducts: cartProducts(),
      checkoutProucts: []
    }
  })
);
