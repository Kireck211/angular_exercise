import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  name = 'Eruck';
  lastName = 'De Santiago';
  username = 'kireck';
  password = '1234';
  repeatPasword = '1234';
  favoriteColor = 'Green';
}
