import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { ProductPageComponent } from './feature/productPage/product-page.component';
const routes: Routes = [{path: '', redirectTo: '/index', pathMatch: 'full'},
                        {path: 'index', component: HomeComponent},
                        {path: 'product', component: ProductPageComponent},
                        {path: 'cart', component: CartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
