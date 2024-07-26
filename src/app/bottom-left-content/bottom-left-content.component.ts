import { Component, Input } from '@angular/core';
import { LocationService } from '../services/location';
import { WeatherService } from '../services/weather';

@Component({
  selector: 'app-bottom-left-content',
  standalone: true,
  imports: [],
  templateUrl: './bottom-left-content.component.html',
  styleUrls: ['./bottom-left-content.component.scss'],
})
export class BottomLeftContentComponent {
  @Input() user_city_weather_data: any;
  imagePath: string = 'assets/sunny.png';

  constructor(
    private location: LocationService,
    private weather: WeatherService
  ) {}

  ngOnInit(): void {
    this.location.getGeolocation().then(() => {
      this.weather
        .getWeatherByCoords(this.location.latitude, this.location.longitude)
        .then((data) => {
          this.user_city_weather_data = data;
        });
    });
  }

  getRoundedTemp(temp: number): number {
    return Math.floor(temp);
  }
}
