import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Импортируйте FormsModule

import { CommonModule, NgIf } from '@angular/common';
import { PouplarCityComponent } from '../pouplar-city/pouplar-city.component';
import { WeatherService } from '../services/weather';

@Component({
  selector: 'app-top-content',
  standalone: true,
  imports: [CommonModule, PouplarCityComponent, NgIf, FormsModule],
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss'],
})
export class TopContentComponent implements OnInit {
  popular_cities_list = ['London', 'Tashkent', 'Toronto', 'Moscow', 'Tokyo'];
  weatherData: any[] = [];
  cityName: string = '';

  constructor(private weather: WeatherService) {}

  ngOnInit(): void {
    this.popular_cities_list.forEach(async (city) => {
      this.weather.getWeatherByCity(city).then((data) => {
        this.weatherData.push(data);
      });
    });
  }
  @Output() citySearch: EventEmitter<string> = new EventEmitter<string>();

  onSearchClick() {
    this.citySearch.emit(this.cityName);
    console.log(this.cityName);
  }
}
