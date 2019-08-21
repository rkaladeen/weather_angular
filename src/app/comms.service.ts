import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommsService {
  currentLocations: any;

  setLocationData(data: any): void {
    this.currentLocations = data;
  }

  getLocationData(zip: any) {
    for (let i = 0; i < this.currentLocations.length; i++) {
      if (this.currentLocations[i].zip == zip) {
        return this.currentLocations[i]
      }
    }
  }
  
}
 


