import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as addCartAction from '../../store/actions/cartAction';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { productsSelector } from 'src/app/store/selectors/prodctSelector';
import { appStateInterface, productState } from 'src/app/store/state';
import { product } from 'src/app/model/interface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('transformMenu', [
      state('void', style({
        transform: 'scaleY(0)'
      })),
      state('enter', style({
        transform: 'scaleY(1)'
      })),
      transition('void <=> enter', animate('120ms cubic-bezier(0, 0, 0.2, 1)'))
    ])
  ]
})
export class ProductComponent implements OnInit, product {
  @Input() product!: productState;
  @Input() imgId: number = 6;
  productId: string = '';
  productName: string = '';
  productPrice: number = 0;
  productCount: number = 0;
  productDesc: string = '';


  productList$?: Observable<productState[]>;
  form: FormGroup = new FormGroup({
    count: new FormControl('1')
  })

  constructor(
    private store: Store<appStateInterface>,
    private dialog: MatDialog,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.productList$ = this.store.select(productsSelector);
  }
  getcoupon(productId: string): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.productId = this.product.productId ? this.product.productId : '';
    this.productName = this.product.productName ? this.product.productName : '';
    this.productPrice = this.product.productPrice ? this.product.productPrice : 0;
    this.productCount = this.product.productCount ? this.product.productCount : 0;
    this.productDesc = this.product.productDesc ? this.product.productDesc : '';
  }

  addCart() {
    this._snackBar.open('Adding Sucess!', 'close');
    const cartProduct = {
      ...this.product,
      productCount: this.form.value.count
    }

    this.store.dispatch(
      addCartAction.addCart({ cartProduct: cartProduct })
    )

    // const dialogRef = this.dialog.open(AlertComponent);
    // dialogRef.afterClosed().subscribe((result:any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  buy() {
    this.router.navigate(['./cart'])
  }

  add() {
    const nowCount = +this.form.value.count;
    this.form.get('count')?.setValue(nowCount + 1);
  }

  reduce() {
    const nowCount = +this.form.value.count;
    if (nowCount <= 1) return;
    this.form.get('count')?.setValue(nowCount - 1);
  }

  setRandomId() {
    return Math.ceil(Math.random()+1);
  }
}
