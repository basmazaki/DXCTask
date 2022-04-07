import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthServicesService {
  constructor(private http: HttpClient) {}
  login(credentials: any) {
    //return this.http.post('/api/authenticate', JSON.stringify(credentials));// if find backend services
    console.log('credentials in services ', credentials);
    if (credentials) {
      localStorage.setItem('token', 'true');
      console.log('token', localStorage.getItem('token'));
    } else {
      localStorage.setItem('token', 'false');
    }
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      console.log('ttttt', localStorage.getItem('token'));

      return true;
    } else {
      return false;
    }
  }
}
