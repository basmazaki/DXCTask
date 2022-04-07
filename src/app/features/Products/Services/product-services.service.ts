import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(`${environment.ulr}/products`);
  }

  getProductDetails(prdID: number) {
    return this.http.get(`${environment.ulr}/productDetails/${prdID}`);
  }
}
