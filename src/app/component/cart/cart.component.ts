import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { productInterface } from 'src/app/model/productInterface';
import { cartProductsSelector, productsSelector, testSelector } from 'src/app/store/selectors';
import * as addCartAction from '../../store/actions'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productList: productInterface[] = [];
  cartProduct$?: Observable<productInterface[]>;
  productList$?: Observable<productInterface[]>;
  checkedList: productInterface[] = [];

  constructor(private store: Store<appStateInterface>) {
    this.cartProduct$ = this.store.select(cartProductsSelector);
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnInit(): void {
    this.update()
  }

  update() {
    this.cartProduct$?.subscribe(res => {
      this.productList = res
    })
  }

  buy() {
    this.store.dispatch(
      addCartAction.buy({ products: this.checkedList })
    )
  }

  feeSum() {
    return this.checkedList.reduce((a: number, b: productInterface) => {
      return a + b.productPrice * b.productCount
    }, 0)
  }

  //TODO 全選尚未做
  check(product: productInterface, event: any) {
    if (event.target.checked) {
      this.checkedList = [...this.checkedList, product]
    } else {
      this.checkedList = this.checkedList.filter(value => value.productId !== product.productId)
    }
  }

  add(index: number) {
    this.store.dispatch(
      addCartAction.plus({ cartProduct: this.productList[index] })
    )
  }

  reduce(index: number, count: number) {
    if (count <= 1) return;
    this.store.dispatch(
      addCartAction.reduce({ cartProduct: this.productList[index] })
    )
  }
}
