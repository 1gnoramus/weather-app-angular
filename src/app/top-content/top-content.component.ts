import { Component } from '@angular/core';
import { PouplarCityComponent } from '../pouplar-city/pouplar-city.component';

@Component({
  selector: 'app-top-content',
  standalone: true,
  imports: [PouplarCityComponent],
  templateUrl: './top-content.component.html',
  styleUrl: './top-content.component.scss',
})
export class TopContentComponent {}
