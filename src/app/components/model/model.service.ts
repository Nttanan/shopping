import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarData } from 'src/app/shared/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http:HttpClient) { }


  getCar(): Observable<CarData>
  {
    return this.http.get<CarData>('assets/jsons/car.json');
  }
}
