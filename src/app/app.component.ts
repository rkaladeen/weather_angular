import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Weather Forecast';
  locations = [
    { name: "Arlington VA", zip: "22209", active: false, img: "https://as1.ftcdn.net/jpg/00/73/84/24/500_F_73842475_QTDWMdDBR4f8AlSf1WCsQIl8erNXFFOW.jpg" },
    { name: "Berkley CA", zip: "94608", active: false },
    { name: "Bolse ID", zip: "83702", active: false },
    { name: "Chicago IL", zip: "60610", active: false },
    { name: "Dallas TX", zip: "75202", active: false },
    { name: "Los Angeles CA", zip: "91502", active: false },
    { name: "Orange County CA", zip: "92626", active: false },
    { name: "Seattle CA", zip: "98004", active: false },
    { name: "Silicon Valley CA", zip: "95112", active: false },
    { name: "Tulsa OK", zip: "74120", active: false }
  ]

  setActive(location_ind: number) {
    this.locations[location_ind].active = true;
    for (let i = 0; i < this.locations.length; i++) {
      if (i !== location_ind) {
        this.locations[i].active = false;
      }
    }
  }

}
