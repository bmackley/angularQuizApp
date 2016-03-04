import { Component, OnInit}       from 'angular2/core';
import { ControlGroup, FormBuilder, FORM_DIRECTIVES, Validators, NgForm }       from 'angular2/common';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@Component({
  selector: 'my-app',
  template: `
  {{diagnostic}}
  <div class="row">
  <div class="col s6 offset-s3 m6 offset-m3 l6 offset-l3">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Create account</span>
        <form [ngFormModel]="signupForm" (ngSubmit)="doSignUp()">
          <input [(ngModel)]="email" type="email" placeholder="Your email">
          <input [(ngModel)]="password" type="password" placeholder="Your password">
          <input [(ngModel)]="password_verified" type="password" placeholder="Verify your password">
          <button type="submit">Log in</button>
        </form>
        TODO: Remove this: {{email}}
    </div>
  </div>
</div>

  `,
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
  ]
})
export class SignUpComponent{
  signupForm: ControlGroup;
  public email;
  public password;
  public password_verified;
  constructor(builder: FormBuilder, private _router: Router) {
    this.signupForm = builder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      password_verified: ["", Validators.required]
    });
  }

  doSignUp(){
    alert(this.email);
    var fireBaseInfo = new Firebase("https://e3education.firebaseio.com/");
    fireBaseInfo.push({
      email : {
        email    : this.email,
        password : this.password
      }
    });
  }
}
