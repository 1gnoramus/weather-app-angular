import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pouplar-city',
  standalone: true,
  imports: [],
  templateUrl: './pouplar-city.component.html',
  styleUrl: './pouplar-city.component.scss',
})
export class PouplarCityComponent {
  @Input() weatherData: any;

  getRoundedTemp(temp: number): number {
    return Math.floor(temp);
  }
}
