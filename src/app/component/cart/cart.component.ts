import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { productInterface } from 'src/app/model/productInterface';
import { cartProductsSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productList: productInterface[] = [];
  cartProduct$?: Observable<productInterface[]>;

  constructor(private store: Store<appStateInterface>) {
    this.cartProduct$ = this.store.pipe(select(cartProductsSelector))
  }

  ngOnInit(): void {
    this.cartProduct$?.subscribe(res => {
      console.log('res',res)
      this.productList = res})

  }
}
