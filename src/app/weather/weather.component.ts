import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from '../http.service'

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['../app.component.css']
})
export class WeatherComponent implements OnInit {
  weatherInfo: any;
  locationName: any;
  // image: any;
  constructor(private route: ActivatedRoute, private _httpService: HttpService ) { }

  ngOnInit() {
    this.getZipCode();
    this.getLocationName();
    // this.getImage();
  }

  getZipCode(): void {
    this.route.params.subscribe(zip => {
      let weatherData = this._httpService.getWeather(zip.zip);
      weatherData.subscribe(data => {
        this.weatherInfo = data;
      })
    })
  }

  getLocationName(): void {
    this.route.params.subscribe(location => {
      this.locationName = location.location;
    })
  }

  // getImage(): void {
  //   this.route.params.subscribe(img => {
  //     this.image = img.img;
  //   })
  // }
}
