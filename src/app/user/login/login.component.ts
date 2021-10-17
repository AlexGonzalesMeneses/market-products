import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  mouseoverLogin?: any;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }
}
