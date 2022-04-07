import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../../Services/auth-services.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  credentials: { username: 'basma'; password: 'zaki' };
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthServicesService,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.credentials = { username: 'basma', password: 'zaki' };
  }

  ngOnInit(): void {}
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    console.log('f', this.f['username'].value, this.f['password'].value);
    this.credentials.username = this.f['username'].value;
    this.credentials.password = this.f['password'].value;
    localStorage.setItem('username', this.credentials.username);
    console.log(' this.credentials', this.credentials);
    this.authService.login(this.credentials);
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    if (localStorage.getItem('token')) {
      this.router.navigate([returnUrl || 'product']);
    }
  }
}
