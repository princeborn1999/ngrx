export interface appStateInterface {
  products: productState[];
  cartProducts: productState[]
}

export interface productState {
  productId: string;
  productName: string;
  productPrice: number;
  productCount: number;
  productDesc: string;
}
