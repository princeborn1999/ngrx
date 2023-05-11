import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, concatMap, of } from 'rxjs';
import { cart, product } from 'src/app/model/interface';
import { cartProductsSelector, productsSelector } from 'src/app/store/selectors/prodctSelector';
import { appStateInterface, productState } from 'src/app/store/state';
import * as addCartAction from '../../store/actions/cartAction';
import { coupon } from './../../model/interface';
import { AlertComponent } from 'src/app/component/alert/alert.component';



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
  form: FormGroup;
  productList: productState[] = [];
  cartProduct$?: Observable<productState[]>;
  productList$?: Observable<productState[]>;
  checkedList: productState[] = [];

  constructor(
    private store: Store<appStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
    this.cartProduct$ = this.store.select(cartProductsSelector);
    this.productList$ = this.store.select(productsSelector);
    this.form = this.fb.group({
      produts: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.cartProduct$?.pipe(
      concatMap((res: productState[], i: number) => {
        if (i === 0) res.forEach(() =>
          this.produts.push(this.fb.group({ checked: false })))
        return of(res);
      })
    ).subscribe(res => this.productList = res);
  }

  get produts() {
    return this.form.get('produts') as FormArray;
  }


  usingCoupon(coupon: coupon) {
    console.log('123');
  }

  buy() {
    this.store.dispatch(addCartAction.goCheckout({ cartProducts: this.checkedList }));
    this.router.navigate(['./checkout']);
  }

  feeSum() {
    this.checkedList = this.productList.filter((product) =>
      this.checkedList.find((checkedProduct) =>
        checkedProduct.productId === product.productId)).map(obj => ({
          ...obj,
          productCount: obj.productCount
        }));

    return this.checkedList.reduce((a: number, b: productState) => {
      return a + b.productPrice * b.productCount
    }, 0)
  }

  select(product: productState, i: number) {
    const isChecked = this.produts.at(i).get('checked')?.value;
    this.checkedList = isChecked ?
      [...this.checkedList, product] :
      this.checkedList.filter(value => value.productId !== product.productId);
  }

  deleteAll() {
    console.log('123');
  }

  selectAll(event: any) {
    const isAllSelected = this.checkedList.length === this.productList.length;
    event.target.checked = isAllSelected ? false : true;
    this.produts.controls.forEach(control =>
      control.get('checked')?.setValue(isAllSelected ? false : true))
    this.checkedList = isAllSelected ? [] : this.productList;
  }

  add(index: number) {
    this.store.dispatch(addCartAction.plus({ cartProduct: this.productList[index] }))
  }

  minus(index: number, count: number) {
    if (count <= 1) return;
    this.store.dispatch(addCartAction.minus({ cartProduct: this.productList[index] }))
  }

  delete(product: productState, index: number) {
    this.produts.removeAt(index);
    this.store.dispatch(addCartAction.deleteProdct({ cartProduct: product }))
  }
}
