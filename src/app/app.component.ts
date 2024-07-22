import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopContentComponent } from './top-content/top-content.component';
import { BottomLeftContentComponent } from './bottom-left-content/bottom-left-content.component';
import { BottomRightContentComponent } from './bottom-right-content/bottom-right-content.component';

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
}
