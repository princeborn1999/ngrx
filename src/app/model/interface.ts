export interface product {
  productId: string;
  productName: string;
  productPrice: number;
  productCount: number;
  productDesc: string;

  addCart(): void;
  getcoupon(productId: string): void;
}

export interface cart {
  productIds: string[];
  deleteAll(): void;
  selectAll(check: Event): void;
  buy(): void;
  usingCoupon(coupon: coupon): void;
}

export interface coupon {
  couponId: string;
  couponType: string;
  couponName: string;
  couponDescription: string;
  limit: number; //條件
  discount?: number; //折數 例0.9 0.8
  priceOff?: number; //單一品項折價 例10,20,30
  deliveryFree?: boolean;
}
