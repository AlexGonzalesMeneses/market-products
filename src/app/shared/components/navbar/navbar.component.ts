import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public items = [
    {name:"Products", activate: true, route:"products"},
    {name:"Providers", activate: true, route:"providers"},
    {name:"Pays", activate: true, route:"pays"},
    {name:"Promotions", activate: true, route:"promotions"},
    {name:"Orders", activate: true, route:"orders"}
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string){ 
    this.router.navigateByUrl(route)
  }

}
