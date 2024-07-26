import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private openWeatherMapURL = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = 'defaa80eb6e43e947faa745459177730';

  async getWeatherByCity(city: string): Promise<any> {
    const url = `${this.openWeatherMapURL}?q=${city}&appid=${this.apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
  async getWeatherByCoords(lat: number, lon: number): Promise<any> {
    const url = `${this.openWeatherMapURL}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
