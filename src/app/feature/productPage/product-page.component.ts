import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { loadProducts } from 'src/app/store/actions/productAction';
import { productsSelector } from 'src/app/store/selectors/prodctSelector';
import { appStateInterface, productState } from 'src/app/store/state';
import { searchBarList } from 'src/assets/mock/mockSearchBar';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit, OnChanges {
  @Input() filterList: string[] = [];
  @Input() searchList: string[] = [];
  @Input() searchText: string = '';
  searchBarList = searchBarList;
  productList$?: Observable<productState[]>;

  constructor(
    private store: Store<appStateInterface>
  ) {
    this.productList$ = this.store.select(productsSelector);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filterList'] ||
      changes['searchList'] ||
      changes['searchText']) {
      this.productList$ =
        this.filterList.length === 0 && this.searchList.length === 0 ?
          this.store.select(productsSelector) :
          this.filterProducts();
    }
  }

  ngOnInit() {
    this.getProductsData();
  }

  getProductsData(): void {
    this.store.dispatch(loadProducts());
  }

  filterProducts() {
    const filterList = (product: productState) => (
      product.category.some(item =>
        this.filterList.includes(item)
      ))


    const searchList = (product: productState) => {
      type ProductKey = keyof productState;
      return Object.keys(product).some(key =>
        this.searchList.indexOf(key) !== -1 &&
        product[key as ProductKey].toString().includes(this.searchText)
      )
    }

    return this.productList$?.pipe(
      map(products => (
        this.filterList.length === 0 || this.searchList.length == 0 ?
          products.filter(product =>
            searchList(product) ||
            filterList(product)
          ) :
          products.filter(product =>
            searchList(product) &&
            filterList(product)
          )
      ))
    )
  }
}
