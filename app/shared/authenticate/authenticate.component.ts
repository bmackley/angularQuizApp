import { Component, OnInit, Inject}       from 'angular2/core';
import { ControlGroup, FormBuilder, FORM_DIRECTIVES, Validators, NgForm }       from 'angular2/common';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { FireBaseService }     from './firebase.service';
import {Authenticate} from './authenticate';
import {Actions } from '../../redux/actions';

@Component({
  selector: 'my-app',
  template: `
  {{diagnostic}}
  <div class="row">
  <div class="col s6 offset-s3 m6 offset-m3 l6 offset-l3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Login</span>
        <form [ngFormModel]="loginForm" (ngSubmit)="doLogin(emailInput.value, passwordInput.value)">
          <input #emailInput type="email" placeholder="Your email">
          <input #passwordInput type="password" placeholder="Your password">
          <button type="submit">Log in</button>
        </form>
        TODO: Remove this: {{email}}
    </div>
  </div>
</div>
<!--
<div class="row">
  <div class="col s6 offset-s3 m6 offset-m3 l6 offset-l3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <h2>Login</h2>
        <form #f="ngForm"
              (ngSubmit)="onSubmit(f)"
              class="ui form">

          <div class="field">
            <input ngControl="email" type="email" placeholder="Your email">
            <input ngControl="password" type="password" placeholder="Your password">
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
-->
  `,
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    FireBaseService
  ]
})
export class LoginComponent{
  loginForm: ControlGroup;
  public authenticate: Authenticate[];
  public email;
  public password;
  private store;
  constructor(builder: FormBuilder, private _router: Router, private _FireBaseService: FireBaseService, @Inject('REDUX_STORE') store) {
    this.loginForm = builder.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  });
  this.store = store;
  }

  getValue() {
    console.log(JSON.stringify(this.loginForm.value, null, 2))
    //return JSON.stringify(this.loginForm.value, null, 2)
  }
  doLogin(email, password){
    console.log(email)
    console.log('password' + password)
    Actions.authenticateUser.execute(this.store, email, password)
  }
}
