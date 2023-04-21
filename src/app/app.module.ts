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


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    // HomeComponent,
    // CartComponent,
    // NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
