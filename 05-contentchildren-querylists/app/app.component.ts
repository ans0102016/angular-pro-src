import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <auth-form
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join Us
        </button>
      </auth-form>
      <auth-form
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <auth-remember (checked)="rememberUser($event)"></auth-remember>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})
export class AppComponent {

  rememberMe: boolean; 

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account: ', user);
  }

  loginUser(user: User) {
    console.log('Login: ', user);
  }
}
