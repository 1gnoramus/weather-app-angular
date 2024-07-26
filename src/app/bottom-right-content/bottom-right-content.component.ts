import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-right-content',
  standalone: true,
  imports: [],
  templateUrl: './bottom-right-content.component.html',
  styleUrls: ['./bottom-right-content.component.scss'],
})
export class BottomRightContentComponent {
  imagePath: string = 'assets/sunny.png';

  @Input() search_city_weather_data: any;
}
