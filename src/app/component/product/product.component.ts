import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { product } from 'src/app/model/interface';
import { cartProduct } from 'src/app/model/productInterface';
import * as addCartAction from '../../store/actions'
import { cartProductSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements product{
  productId: string = '1';
  productName: string = '商品名稱';
  productPrice: number = 100;
  productCount: number = 100;
  productDesc: string= '商品描述描述';
  cartProduct$?: Observable<cartProduct>;

  constructor(private store: Store){

  }


  addCart(productId: string, count: string){

  }

  getcoupon(productId: string){

  }
}
