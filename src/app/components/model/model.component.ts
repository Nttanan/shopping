import { Component, OnInit } from '@angular/core';
import { ModelService } from './model.service';
import { CarData, Model } from 'src/app/shared/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit{
  brandName:string = '';
  carDatas:Model[] = [];
  constructor(private service:ModelService, private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.brandName = params['brandName'];
      this.service.getCar().subscribe((res:CarData) => {
        if(res && res.data.length > 0)
        {
          let car = res.data.filter((car:Model) => car.brand.toLowerCase() == this.brandName.toLowerCase());
          if(car.length > 0)
          {
            this.carDatas = car;
          }
          else
          {
            this.router.navigate(['/notfound',this.brandName]);
          }
        }
      });
    });

  }

}
