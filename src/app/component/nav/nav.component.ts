import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { productInterface } from 'src/app/model/productInterface';
import { cartProductsSelector } from 'src/app/store/selectors';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  cartProduct$?: Observable<productInterface[]>;
  totalProduct?: number;

  constructor(private store: Store<appStateInterface>) {
    this.cartProduct$ = this.store.select(cartProductsSelector);
  }

  ngOnInit(): void {
    this.cartProduct$?.subscribe(allCartProduct =>
      this.totalProduct = allCartProduct.reduce((a, b) => { return a + b.productCount }, 0))
  }
}