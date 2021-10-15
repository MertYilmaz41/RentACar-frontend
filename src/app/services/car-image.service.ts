import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:44301/api/';

  constructor(private httpClient:HttpClient) { }

  getImagePath(imagePath:string){
    return this.apiUrl + imagePath;
  }

  getCarImage(carId:number){
    let newPath = this.apiUrl +"carimages/getbycarid?carId=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
