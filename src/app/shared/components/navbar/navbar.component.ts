import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public items = [
    {name:"Products", activate: true, route:"products"},
    {name:"Providers", activate: true, route:"providers"},
    // {name:"Pays", activate: true, route:"pays"},
    {name:"Promotions", activate: true, route:"promotions"},
    {name:"Orders", activate: true, route:"orders"}
  ]

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.isAuthenticated()
  }

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  navigateTo(route: string){ 
    this.router.navigateByUrl(route)
  }

  onClick(){
    if(this.isAuthenticated()){
      this.navigateTo("user/profile")
    }
    else{
      this.navigateTo("user/login")
    }
  }

}
