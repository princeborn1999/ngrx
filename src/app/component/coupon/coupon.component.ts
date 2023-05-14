import { Component } from '@angular/core';
import { coupon } from 'src/app/model/interface';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements coupon {
  couponId = '';
  couponType = '';
  couponName = '$1,000免運券';
  couponDescription = '低消$1,000';
  limit = 0;
  discount?: number;
  priceOff?: number;
  deliveryFree?: boolean;

  constructor(){}
}
