import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterContentInit {
  attributes = {
    name: { value: 'Erick', isFilled: false, label: 'Name' },
    lastName: { value: 'De Santiago', isFilled: false, label: 'Last Name' },
    username: { value: 'kireck', isFilled: false, label: 'Username' },
    password: { value: '1234', isFilled: false, label: 'Password', type: 'password' },
    repeatPassword: { value: '1234', isFilled: false, label: 'Confirm password', type: 'password' },
    favoriteColor: { value: 'green', isFilled: false, label: 'Favorite Color' }
  }
  attributesKeys = Object.keys(this.attributes);
  matchingPasswords = false;
  allFilled: boolean;

  ngAfterContentInit() {
    const { password, repeatPassword } = this.attributes;
    this.matchingPasswords = password.value === repeatPassword.value;
    this.allFilled = this.verifyAllFilled();
    console.log(this.allFilled)
  }

  onInputChange(property) {
    this.allFilled = this.verifyAllFilled()
    if (['password', 'repeatPassword'].includes(property)) {
      this.verifyMatchingPasswords();
    }
  }

  verifyMatchingPasswords() {
    const { password, repeatPassword } = this.attributes
    this.matchingPasswords = password.value === repeatPassword.value;
  }

  verifyAllFilled() {
    return Object.keys(this.attributes).every((key) => this.attributes[key].value.length > 0)
  }
}
