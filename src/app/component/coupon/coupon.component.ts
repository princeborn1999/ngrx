import { Component, Input, OnInit } from '@angular/core';
import { coupon } from 'src/app/model/interface';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements coupon, OnInit {
  @Input() couponData!: coupon;
  couponId = '';
  couponType = '';
  couponName = '$1,000免運券';
  couponDescription = '低消$1,000';
  limit = 0;
  discount?: number;
  priceOff?: number;
  deliveryFree?: boolean;

  constructor(){
  }

  ngOnInit(): void {
    this.couponId = this.couponData?.couponId;
    this.couponType = this.couponData?.couponType;
    this.couponName = this.couponData?.couponName;
    this.couponDescription = this.couponData?.couponDescription;
    this.limit = this.couponData?.limit;
    this.discount = this.couponData?.discount;
    this.priceOff = this.couponData?.priceOff;
    this.deliveryFree = this.couponData?.deliveryFree;
  }
}
