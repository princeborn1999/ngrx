import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { appStateInterface, productState } from 'src/app/store/state';
import { Store } from '@ngrx/store';
import { buy } from 'src/app/store/actions/cartAction';
import { checkoutProductsSelector } from 'src/app/store/selectors/prodctSelector';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  buyProduct$?: Observable<productState[]>;
  buyProducts: productState[] = [];
  panelOpenState = false;

  constructor(
    private store: Store<appStateInterface>,
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.buyProduct$ = this.store.select(checkoutProductsSelector);
  }

  ngOnInit(): void {
    this.buyProduct$?.subscribe(products => this.buyProducts = products)
  }

  buy() {
    this.productService.updateProducts(this.buyProducts).subscribe();
    this.store.dispatch(buy({ 'products': this.buyProducts }));
    this.router.navigate(['..']);
  }
}
