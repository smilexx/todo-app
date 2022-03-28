import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  value = 50;

  onSliderValueChange(value: number | null) {
    this.value = value || 0;
  }
}
