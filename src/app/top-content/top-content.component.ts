import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { PouplarCityComponent } from '../pouplar-city/pouplar-city.component';
import { WeatherService } from '../services/weather';

@Component({
  selector: 'app-top-content',
  standalone: true,
  imports: [CommonModule, PouplarCityComponent, NgIf],
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss'],
})
export class TopContentComponent implements OnInit {
  private apiKey = 'defaa80eb6e43e947faa745459177730';
  private openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
  popular_cities_list = ['London', 'Paris', 'Toronto', 'Moscow', 'Tokyo'];
  // city = 'London';
  weatherData: any[] = [];

  // constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.popular_cities_list.forEach(async (city) => {
      this.getWeatherByCity(city);
    });
  }

  getWeatherByCity(city: string): void {
    fetch(
      `${this.openWeatherMapURL}?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        this.weatherData.push(resp);

        console.log(this.weatherData);
      })
      .catch((error) => console.error(error.message));
  }

  onSearchClick(): void {
    const cityInput = (
      document.getElementById('city-input') as HTMLInputElement
    ).value;
    this.getWeatherByCity(cityInput);
  }
}
