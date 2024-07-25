import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'defaa80eb6e43e947faa745459177730';

  getWeatherByCity(city: string): void {
    console.log(city);
    fetch(
      `${this.openWeatherMapURL}?q=${city}&appid=${this.apiKey}&units=metric`
    )
      .then((resp) => resp.json())
      .then((resp) => {
        return resp;
      })
      .catch((error) => console.error(error.message));
  }
}
