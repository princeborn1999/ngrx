import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProducts } from '../../store/actions/productAction';
import { productsSelector } from '../../store/selectors/prodctSelector';
import { appStateInterface, productState } from 'src/app/store/state';
import { Product } from 'src/interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements Product, OnInit {
  productList$?: Observable<productState[]>;

  constructor(
    private store: Store<appStateInterface>,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.store.dispatch(loadProducts());
  }
}
