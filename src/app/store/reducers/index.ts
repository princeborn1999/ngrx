import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

export const reducers = {
  product: productReducer,
  cart: cartReducer
};
