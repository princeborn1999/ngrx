import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, from, map, switchMap } from 'rxjs';
import { productsSelector } from '../store/selectors/prodctSelector';
import { appStateInterface, productState } from '../store/state';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';
  products$!: Observable<productState[]>;

  constructor(
    private http: HttpClient,
    private store: Store<appStateInterface>,
  ) {
    this.products$ = this.store.select(productsSelector);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateProducts(buyProducts: productState[]): Observable<any[]> {
    const buyListIds = buyProducts.map(buyProduct => buyProduct.productId);

    return this.products$.pipe(
      switchMap(products => from(products).pipe(
        filter(product=> buyListIds.indexOf(product.productId) !== -1)
      )),
      map(product => ({
        ...product,
        productCount: product.productCount - buyProducts[buyListIds.indexOf(product.productId)].productCount
      })),
      switchMap(product => this.http.put<any[]>(`${this.apiUrl}/${product.productId}`, product))
    )
  }
}
