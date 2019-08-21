import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(zipcode: any) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&APPID=441e1ae211ff813ddb178653cfe0da5d&units=imperial`)
  }
}
