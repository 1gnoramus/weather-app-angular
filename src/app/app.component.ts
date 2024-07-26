import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopContentComponent } from './top-content/top-content.component';
import { BottomLeftContentComponent } from './bottom-left-content/bottom-left-content.component';
import { BottomRightContentComponent } from './bottom-right-content/bottom-right-content.component';
import { WeatherService } from './services/weather';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopContentComponent,
    BottomLeftContentComponent,
    BottomRightContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-weather-app';

  weatherData: any;
  constructor(private weather: WeatherService) {}

  onCitySearch(cityName: string) {
    this.weather
      .getWeatherByCity(cityName)
      .then((data) => {
        this.weatherData = data;
        console.log('data');
      })
      .catch((error) => console.error(error.message));
  }
}
