import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { product } from 'src/app/model/interface';
import * as addCartAction from '../../store/actions'
import { cartProductsSelector } from 'src/app/store/selectors';
import { productInterface } from 'src/app/model/productInterface';
import { appStateInterface } from 'src/app/model/appStateInterface';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productId: string = '1';
  productName: string = '商品名稱';
  productPrice: number = 100;
  productCount: number = 100;
  productDesc: string= '商品描述描述';
  cartProduct$?: Observable<productInterface[]>;
  form: FormGroup = new FormGroup({
    count: new FormControl('')
  })

  constructor(private store: Store<appStateInterface>){
    this.cartProduct$ = this.store.pipe(select(cartProductsSelector))
  }


  addCart(productId: string, count: string){
    console.log('addCart')
    const cartProduct = {
      productId: productId,
      productName: this.productName,
      productPrice: +this.productName,
      productCount: +count,
      productDesc: this.productDesc,
    }
    console.log('cartProduct',cartProduct)
    this.store.dispatch(
      addCartAction.addCart({cartProduct: [cartProduct]})
    )
  }
  buy(){
    
  }
  getcoupon(productId: string){

  }
}
