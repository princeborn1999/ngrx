import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { appStateInterface, productState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { buy } from 'src/app/store/actions/cartAction';
import { checkoutProductsSelector } from 'src/app/store/selectors/prodctSelector';
import { ProductService } from 'src/app/service/product.service';
import { coupon } from 'src/app/model/interface';
import { couponsSelector } from 'src/app/store/selectors/couponSelector';
import { loadCoupons } from 'src/app/store/actions/couponAction';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  deliveryFee = 60;
  feeSum = 0;
  productCounts = 0;
  initFeeSum = 0;
  buyProduct$?: Observable<productState[]>;
  buyProducts: productState[] = [];
  panelOpenState = false;
  coupons$?: Observable<coupon[]>;

  form = new FormGroup({
    isDeliveryFree: new FormControl(''),
    discount: new FormControl('')
  })

  constructor(
    private store: Store<appStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.buyProduct$ = this.store.select(checkoutProductsSelector);
    this.coupons$ = this.store.select(couponsSelector);
  }

  ngOnInit(): void {
    this.buyProduct$?.subscribe(products => this.buyProducts = products)
    this.getCouponData();
    this.getInitFeeSum();
  }

  getCouponData() {
    this.store.dispatch(loadCoupons())
  }

  buy() {
    this.productService.updateProducts(this.buyProducts).subscribe();
    this.store.dispatch(buy({ 'products': this.buyProducts }));
    this.router.navigate(['..']);
  }

  getInitFeeSum() {
    this.initFeeSum = this.buyProducts.reduce((a, b) => {
      return a + b.productPrice * (+b.productCount)
    }, 0)
    this.productCounts = this.buyProducts.reduce((a, b) => {
      return a + (+b.productCount)
    }, 0)
    this.feeSum = this.initFeeSum + this.deliveryFee;
  }

  changeFeeSum(coupon: coupon) {
    if (this.form.value.isDeliveryFree) {
      this.feeSum = this.initFeeSum - this.deliveryFee;
    }

    if (this.form.value.discount) {
      switch (this.form.value.discount) {
        case 'discount':
          this.feeSum = Math.floor(this.initFeeSum * coupon.discount!)
          break;
        case 'priceOff':
          this.feeSum = this.initFeeSum - coupon.priceOff!
          break;
        default:
          break;
      }
    }
  }

  //TODO not yet
  achieve(coupon: coupon) {
    console.log('coupon.limit',coupon.limit)
    console.log('this.initFeeSum',this.initFeeSum)
    switch (coupon.couponType) {
      case 'deliveryFree':
        console.log(this.initFeeSum < coupon.limit)
        return this.initFeeSum < coupon.limit;
      case 'discount':
        console.log(this.productCounts < coupon.limit)
        return this.productCounts < coupon.limit;
      case 'priceOff':
        console.log(this.initFeeSum < coupon.limit)
        return this.initFeeSum < coupon.limit;
      default:
        return false;
    }
  }
}
