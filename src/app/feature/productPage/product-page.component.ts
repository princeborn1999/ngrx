import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { productInterface } from 'src/app/model/productInterface';
import { loadProducts } from 'src/app/store/actions';
import { productsSelector } from 'src/app/store/selectors';
import { Product } from 'src/interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements Product, OnInit {
  productList$?: Observable<productInterface[]>;

  constructor(
    private store: Store<appStateInterface>,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnInit() {
    this.getData();
    this.productList$?.subscribe(res => console.log('res', res))
  }

  getData(): void {
    this.store.dispatch(loadProducts());
  }
}
