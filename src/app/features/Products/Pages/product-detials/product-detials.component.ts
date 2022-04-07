import { ProductServicesService } from './../../Services/product-services.service';
import { Product } from './../../Models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detials',
  templateUrl: './product-detials.component.html',
  styleUrls: ['./product-detials.component.scss'],
})
export class ProductDetialsComponent implements OnInit {
  prdID: number;
  prdList: any;
  prd: any;
  constructor(
    private Active_Route: ActivatedRoute,
    private productServices: ProductServicesService,
    private sharedServices: SharedService,
    private _location: Location
  ) {
    this.prdID = Number(this.Active_Route.snapshot.paramMap.get('id'));
    console.log('id', this.prdID);
  }

  ngOnInit(): void {
    this.getProductDetails();
  }
  getProductDetails() {
    this.productServices.getProductDetails(this.prdID).subscribe(
      (res) => {
        this.prd = res;
        console.log('prd', this.prd);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addToCard() {
    let cartItemCount: any;
    this.sharedServices.currentMessage.subscribe(
      (msg: any) => (cartItemCount = msg)
    );
    console.log('cartItemCount', cartItemCount);

    this.sharedServices.updateCartCount(++cartItemCount);
  }
  backClicked() {
    this._location.back();
  }
}
