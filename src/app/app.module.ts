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
import { ComponentModule } from './component/component.module';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductEffects } from './store/effect';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './store/reducers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
