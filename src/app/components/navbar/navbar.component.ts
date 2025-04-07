import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(private route:Router,private location: Location){}

  ngOnInit(): void {

  }
  goBrandPage(){
    this.route.navigate(['/brand']);
  }
  goLocation(){
    this.location.back();
  }
  goHomePage(){
    this.route.navigate(['/home']);
  }
  checkPath(){
    return this.route.url == '/home';
  }
  isNotfoundPage(){
    return this.route.url.includes('/notfound');
  }
}
