import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productList = [
    {
      productName: '商品名稱',
      productPrice: 100,
      productCount: 100,
    }
  ]
}
