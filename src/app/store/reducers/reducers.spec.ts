import { productReducer, initialState } from './productReducer';
import * as addCartAction from '../actions/cartAction'


describe('productReducer', () => {
  it('should add a product to the cart', () => {
    const action = addCartAction.addCart
    const newState = productReducer(initialState, action);

    expect(newState.cartProducts.length).toBe(1);
  });
});





