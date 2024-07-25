import { Component } from '@angular/core';
import { LocationService } from '../services/location';

@Component({
  selector: 'app-bottom-left-content',
  standalone: true,
  imports: [],
  templateUrl: './bottom-left-content.component.html',
  styleUrl: './bottom-left-content.component.scss',
})
export class BottomLeftContentComponent {
  private apiKey = 'defaa80eb6e43e947faa745459177730';
  private openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private location: LocationService) {}
  lat: any;
  long: any;
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      this.location
        .getGeolocation()
        .then(() => {
          this.getWeatherByCoords(
            this.location.latitude,
            this.location.longitude
          );
        })
        .then(() => {
          // this.getWeatherByCoords();
        });
    });
  }

  getWeatherByCoords(lat: number, lon: number): void {
    const url = `${this.openWeatherMapURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => console.error(error.message));
  }
}
