import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducers } from './store/reducers';
import { NavComponent } from './component/nav/nav.component';
import { AlertComponent } from './component/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './store/reducers';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent,
    CartComponent,
    NavComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    StoreModule.forRoot({cart: cartReducers , products: productReducer}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
