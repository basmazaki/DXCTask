import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username;
  cartItemCount: any;
  constructor(private sharedServices: SharedService) {
    this.username = localStorage.getItem('username');
    this.sharedServices.currentMessage.subscribe(
      (msg: any) => (this.cartItemCount = msg)
    );
    localStorage.setItem('k', this.cartItemCount);
  }

  ngOnInit(): void {}
  logout() {
    localStorage.clear();
  }
}
