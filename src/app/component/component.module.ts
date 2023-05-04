import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from '../store/reducers';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { ProductPageComponent } from '../feature/productPage/product-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatOptionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    NgbCarouselModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    StoreModule.forFeature('cart', cartReducers)
  ],
  declarations: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    ProductPageComponent],
  exports: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    ProductPageComponent],
})
export class ComponentModule {}
