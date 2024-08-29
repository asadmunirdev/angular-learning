import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Reactive Forms';
  loginForm = new FormGroup({
    user: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }

  userName: string = '';
  userPassword: string = '';
  userLogin(item: any) {
    this.userName = item.user;
    this.userPassword = item.password;
    console.log('Username:', this.userName);
    console.log('Password:', this.userPassword);
  }

}
