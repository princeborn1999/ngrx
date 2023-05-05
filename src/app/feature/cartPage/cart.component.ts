import { coupon } from './../../model/interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartProductsSelector } from 'src/app/store/selectors/cartSelectors';
import { productsSelector } from 'src/app/store/selectors/prodctSelector';
import { appStateInterface, productState } from 'src/app/store/state';
import * as addCartAction from '../../store/actions/cartAction';
import { cart } from 'src/app/model/interface';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, cart {
  productIds: string[] = [];
  coupon: coupon = {
    couponId: '',
    couponType: '',
    discount: 0, //折數 例0.9 0.8
    priceOff: 0, //單一品項折價 例10,20,30
    deliveryFree: true
  }


  productList: productState[] = [];
  cartProduct$?: Observable<productState[]>;
  productList$?: Observable<productState[]>;
  checkedList: productState[] = [];

  constructor(
    private store: Store<appStateInterface>,
    private router: Router,
    private route:ActivatedRoute
    ) {
    this.cartProduct$ = this.store.select(cartProductsSelector);
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnInit(): void {
    this.update()
  }

  deleteAll(){
    console.log('123');
  }

  selectAll(){
    console.log('123');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  usingCoupon(coupon: coupon){
    console.log('123');
  }

  addCart(productId: string, count: string){
    console.log('123');
  };

  update() {
    this.cartProduct$?.subscribe(res => {
      this.productList = res
    })
  }

  buy() {
    this.store.dispatch(
      addCartAction.buy({ products: this.checkedList })
    )
    this.router.navigate(['../index'],
    {
      relativeTo: this.route
    })
  }

  feeSum() {
    return this.checkedList.reduce((a: number, b: productState) => {
      return a + b.productPrice * b.productCount
    }, 0)
  }

  //TODO 全選尚未做
  check(product: productState, event: any) {
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
      addCartAction.minus({ cartProduct: this.productList[index] })
    )
  }
}
