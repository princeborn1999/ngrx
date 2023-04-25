import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { productInterface } from 'src/app/model/productInterface';
import { productsSelector } from 'src/app/store/selectors';
import * as addCartAction from '../../store/actions';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { loadProducts, loadProductsSuccess, loadProductsFailure  } from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  productList$?: Observable<productInterface[]>;
  dataSource: any = []
  form: FormGroup = new FormGroup({
    count: new FormControl('1')
  })

  constructor(
    private store: Store<appStateInterface>,
    private dialog: MatDialog,
    private router: Router
    ) {
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnInit(){
    this.store.dispatch(loadProducts());
  }

  addCart(product: productInterface) {
    const cartProduct = {
      productId: product.productId,
      productName: product.productName,
      productPrice: +product.productPrice,
      productCount: this.form.value.count,
      productDesc: product.productDesc
    }

    this.store.dispatch(
      addCartAction.addCart({ cartProduct: cartProduct })
    )

    // const dialogRef = this.dialog.open(AlertComponent);
    // dialogRef.afterClosed().subscribe((result:any) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  buy(){
    this.router.navigate(['./cart'])
  }

  getcoupon(productId: string) {

  }

  add() {
    const nowCount = +this.form.value.count;
    this.form.get('count')?.setValue(nowCount + 1);
  }

  reduce() {
    const nowCount = +this.form.value.count;
    if(nowCount <= 1) return;
    this.form.get('count')?.setValue(nowCount - 1);
  }
}
