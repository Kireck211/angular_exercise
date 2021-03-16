import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Erick';
  lastName = 'De Santiago';
  username = 'kireck';
  password = '1234';
  repeatPasword = '1234';
  favoriteColor = 'Green';

  onChange(property: string, event: Event) {
    this[property] = (<HTMLInputElement>event.target).value;
  }
}
