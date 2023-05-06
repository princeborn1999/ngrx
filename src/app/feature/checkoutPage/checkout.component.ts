import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cartProductsSelector } from 'src/app/store/selectors/cartSelectors';
import { appStateInterface, productState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { buy } from 'src/app/store/actions/cartAction';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  buyProduct$?: Observable<productState[]>;

  constructor(
    private store: Store<appStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.buyProduct$ = this.store.select(cartProductsSelector);
  }

  buy() {
    this.buyProduct$?.subscribe(products =>
      this.store.dispatch(buy({'products': products})))
  }
}
