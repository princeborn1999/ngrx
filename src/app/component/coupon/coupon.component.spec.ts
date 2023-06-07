import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CouponComponent } from './coupon.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
describe('CouponComponent', () => {
  let component: CouponComponent;
  let fixture: ComponentFixture<CouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CouponComponent
      ],
    }).compileComponents();
  }));

  it('should create',  async(() => {
    expect(component).toBeTruthy();
  }));

  it('should initialize coupon properties correctly', () => {
    expect(component.couponId).toBe('1');
    expect(component.couponType).toBe('Discount');
    expect(component.couponName).toBe('$1,000免運券');
    expect(component.couponDescription).toBe('低消$1,000');
    expect(component.limit).toBe(1);
    expect(component.discount).toBe(10);
    expect(component.priceOff).toBeUndefined();
    expect(component.deliveryFree).toBe(true);
  });
});
