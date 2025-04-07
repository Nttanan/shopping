import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  constructor(private router:Router) { }
  goToModelPage(model:string){
    this.router.navigate(['/model',model]);
  }
}
