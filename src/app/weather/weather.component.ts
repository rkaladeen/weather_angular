import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../http.service'
import { CommsService } from '../comms.service'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo: any;
  locationName: any;
  image: any;
  constructor(private route: ActivatedRoute, private _httpService: HttpService, private _commsService: CommsService) { }

  ngOnInit() {
    this.getZipCode();
    this.getLocationName();
  }

  getZipCode(): void {
    this.route.params.subscribe(zip => {
      let weatherData = this._httpService.getWeather(zip.zip);
      weatherData.subscribe(data => {
        this.weatherInfo = data;
        // console.log(data);
      })
      let data = this._commsService.getLocationData(zip.zip);
      this.image = data.img;
    })
  }

  getLocationName(): void {
    this.route.params.subscribe(location => {
      this.locationName = location.location;
    })
  }

}
