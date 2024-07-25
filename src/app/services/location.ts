import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  latitude: any;
  longitude: any;
  constructor() {
    this.latitude;
    this.longitude;
  }
  getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        resolve(position.coords);
      });
    });
  }
}
