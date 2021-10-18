import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false
  hide = true;
  userName = new FormControl('',[Validators.required])
  password = new FormControl('',[Validators.required])

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.loading = true
    this.authService.loginUser(this.userName.value, this.password.value);
    this.loading = false
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }

  enabledForm(){
    return this.userName.invalid || this.password.invalid
  }
}