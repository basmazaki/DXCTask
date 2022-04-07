import { ProductDetialsComponent } from './features/Products/Pages/product-detials/product-detials.component';
import { ProductsComponent } from './features/Products/Pages/products/products.component';
import { LoginPageComponent } from './features/LogIn/Pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/LogIn/Services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuard] },
  {
    path: 'productDetails/:id',
    component: ProductDetialsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
