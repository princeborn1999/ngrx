import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { CheckoutComponent } from './checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { of } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { buy } from '../../store/actions/cartAction';
import { loadCoupons } from 'src/app/store/actions/couponAction';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let productService: ProductService;
  let store: MockStore;

  const initialState = {
    checkoutProducts: [],
    coupons: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule,
      ],
      declarations: [CheckoutComponent],
      providers: [
        ProductService,
        provideMockStore({ initialState }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    store = TestBed.inject(MockStore);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch loadCoupons action on ngOnInit', () => {
    const loadCouponsAction = loadCoupons();
    jest.spyOn(store, 'dispatch');
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalledWith(loadCouponsAction);
  });

  it('should update products and dispatch buy action on buy', () => {
    const updateProductsSpy = jest.spyOn(productService, 'updateProducts').mockReturnValue(of());
    const buyAction = buy({ products: component.buyProducts });
    const dispatchSpy = jest.spyOn(store, 'dispatch');
    component.buy();
    expect(updateProductsSpy).toHaveBeenCalledWith(component.buyProducts);
    expect(dispatchSpy).toHaveBeenCalledWith(buyAction);
  });


});
