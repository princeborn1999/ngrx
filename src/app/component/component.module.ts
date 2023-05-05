import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
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

import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoginComponent } from '../feature/loginPage/login.component';
import { CartComponent } from '../feature/cartPage/cart.component';
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
    MatDialogModule,
    MatTabsModule,
    MatRadioModule,
    MatRippleModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    // StoreModule.forFeature('cart', cartReducers)
  ],
  declarations: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    ProductPageComponent,
    LoginComponent],
  exports: [
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    FooterComponent,
    ProductPageComponent],
})
export class ComponentModule {}
