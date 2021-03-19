import { Component, AfterContentInit } from '@angular/core';

import { UserService } from './shared/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [UserService]
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
  users: User[] = [];

  constructor(private userService: UserService) {

  }

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

  printUsers() {
    console.log(this.userService.users)
  }

  getAttribute(key) {
    return this.attributes[key].value;
  }

  addNewUser() {
    const { name: { value: name }, lastName: { value: lastName }, username: { value: username }, favoriteColor: { value: favoriteColor }, password: { value: password }, repeatPassword: { value: repeatPassword } } = this.attributes;
    const user: User = {
      name,
      lastName,
      password,
      repeatPassword,
      username,
      favoriteColor
    }
    this.users.push(user);
  }

  fillForm(index) {
    const user = this.users[index];
    this.attributes.name.value = user.name;
    this.attributes.lastName.value = user.lastName;
    this.attributes.password.value = user.password;
    this.attributes.repeatPassword.value = user.repeatPassword;
    this.attributes.username.value = user.username;
    this.attributes.favoriteColor.value = user.favoriteColor;
  }
}
