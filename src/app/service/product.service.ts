import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, concatMap, from, map, switchMap, take } from 'rxjs';
import { coupon } from '../model/interface';
import { productsSelector } from '../store/selectors/prodctSelector';
import { appStateInterface, productState } from '../store/state';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productApiUrl = 'http://localhost:3000/products';
  couponApiUrl = 'http://localhost:3000/coupons';
  products$!: Observable<productState[]>;

  constructor(
    private http: HttpClient,
    private store: Store<appStateInterface>,
  ) {
    this.products$ = this.store.select(productsSelector).pipe(
      take(1)
    );
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productApiUrl);
  }

  updateProducts(buyProducts: productState[]): Observable<any[]> {
    const buyListIds = buyProducts.map(buyProduct => buyProduct.productId);

    return this.products$.pipe(
      map(products => (
        products
          .filter(product =>
            buyListIds.indexOf(product.productId) !== -1)
          .map(product => ({
            ...product,
            productCount: product.productCount - buyProducts[buyListIds.indexOf(product.productId)].productCount
          }))
      )),
      concatMap(products => from(products)),
      switchMap(product =>
        this.http.put<any[]>(`${this.productApiUrl}/${product.productId}`, product))
    )
  }

  getCoupons(): Observable<coupon[]> {
    return this.http.get<coupon[]>(this.couponApiUrl)
  }
}


