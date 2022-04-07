import { LoginPageComponent } from './features/LogIn/Pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './features/Products/Pages/products/products.component';
import { ProductDetialsComponent } from './features/Products/Pages/product-detials/product-detials.component';
import { NavbarComponent } from './features/Products/Pages/navbar/navbar.component';
import { ContentComponent } from './features/Products/Pages/content/content.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, ProductsComponent, ProductDetialsComponent, NavbarComponent, ContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
