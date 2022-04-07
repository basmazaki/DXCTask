import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DXCTask';
  token;
  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.router.navigate(['/product']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
