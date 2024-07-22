import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopContentComponent } from './top-content/top-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-weather-app';
}
