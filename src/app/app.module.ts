import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './feature/cartPage/cart.component';
import { StoreModule } from '@ngrx/store';
import { NavComponent } from './component/nav/nav.component';
import { ComponentModule } from './component/component.module';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductEffects } from './store/effects/productEffect';
import { HttpClientModule } from '@angular/common/http';
import { productReducer } from './store/reducers/productReducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { reducers } from './store/reducers';
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
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
