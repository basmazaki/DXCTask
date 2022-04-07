import { Router } from '@angular/router';
import { ProductServicesService } from './../../Services/product-services.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prdList: any;
  constructor(
    private productServices: ProductServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productServices.getProducts().subscribe(
      (res: Product) => {
        console.log('res', res);
        this.prdList = res;
        localStorage.setItem('prdList', this.prdList);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
