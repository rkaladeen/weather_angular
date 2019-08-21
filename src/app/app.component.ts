import { Component, OnInit } from '@angular/core';
import { CommsService } from './comms.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Weather Forecast';
  locations = [
    { name: "Arlington VA", zip: "22209", active: false, img: "https://as1.ftcdn.net/jpg/00/73/84/24/500_F_73842475_QTDWMdDBR4f8AlSf1WCsQIl8erNXFFOW.jpg" },
    { name: "Berkley CA", zip: "94608", active: false, img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Berkeley-downtown-Bay-bridge-SF-in-back-from-Lab.jpg" },
    { name: "Bolse ID", zip: "83702", active: false, img: "https://cdn.vox-cdn.com/thumbor/UV0mHZOgmG3Gko_nmdwu2PNyeEM=/0x0:8256x4644/1200x800/filters:focal(3468x1662:4788x2982)/cdn.vox-cdn.com/uploads/chorus_image/image/62886011/shutterstock_1011284800.0.jpg" },
    { name: "Chicago IL", zip: "60610", active: false, img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
    { name: "Dallas TX", zip: "75202", active: false, img: "https://thumbnails.texastribune.org/iIv2yBx1p3sXxEp-88tXw0AS4vs=/850x570/smart/filters:quality(80)/https://static.texastribune.org/media/images/2016/10/18/Dallas_Skyline_TT.jpg" },
    { name: "Los Angeles CA", zip: "91502", active: false, img: "https://cdn.vox-cdn.com/thumbor/qMZyneh3UjnE03c90wHGDb6M0FE=/0x0:6000x4000/1200x675/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/55813197/LA_Skyline_Shutterstock.1529084988.jpg" },
    { name: "Orange County CA", zip: "92626", active: false, img: "https://www.ocregister.com/wp-content/uploads/2018/11/housing-lede_-1.jpg?w=620" },
    { name: "Seattle CA", zip: "98004", active: false, img: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Seattle_Kerry_Park_Skyline.jpg" },
    { name: "Silicon Valley CA", zip: "95112", active: false, img: "https://img.jakpost.net/c/2018/06/29/2018_06_29_48444_1530243023._large.jpg" },
    { name: "Tulsa OK", zip: "74120", active: false, img: "https://d1pk12b7bb81je.cloudfront.net/generated/fit-in/600x400/smart/images/photos/1510776968_1510776963-aerials2007381.jpg" }
  ]

  constructor(private _commsService: CommsService) { }

  ngOnInit() {
    this._commsService.setLocationData(this.locations);
  }


  setActive(location_ind: number) {
    this.locations[location_ind].active = true;
    for (let i = 0; i < this.locations.length; i++) {
      if (i !== location_ind) {
        this.locations[i].active = false;
      }
    }
  }

}
