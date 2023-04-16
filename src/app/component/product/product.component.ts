import { Component } from '@angular/core';
import { product } from 'src/app/model/interface';

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

  constructor(){

  }


  addCart(productId: string, count: string){

  }

  getcoupon(productId: string){

  }
}
