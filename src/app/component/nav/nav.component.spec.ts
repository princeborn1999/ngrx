import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { ComponentModule } from '../component.module';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
const matDialogMock = {
  open: jest.fn()
};


describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports: [ComponentModule,StoreModule.forRoot({}), RouterTestingModule,NoopAnimationsModule],
      providers: [
        {
          provide: ComponentModule,
          useValue: matDialogMock // Provide an empty object or create a mock/stub
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    matDialog = TestBed.inject(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should open LoginComponent dialog on popLogin', () => {
    component.popLogin();
    expect(matDialog.open)
  })
});
