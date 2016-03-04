System.register(['angular2/core', 'angular2/common', 'angular2/router', './firebase.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, firebase_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (firebase_service_1_1) {
                firebase_service_1 = firebase_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(builder, _router, _FireBaseService) {
                    this._router = _router;
                    this._FireBaseService = _FireBaseService;
                    this.loginForm = builder.group({
                        email: ["", common_1.Validators.required],
                        password: ["", common_1.Validators.required]
                    });
                }
                LoginComponent.prototype.getValue = function () {
                    console.log(JSON.stringify(this.loginForm.value, null, 2));
                    //return JSON.stringify(this.loginForm.value, null, 2)
                };
                LoginComponent.prototype.doLogin = function () {
                    function authHandler(error, authData) {
                        if (error) {
                            console.log("Login Failed!", error);
                        }
                        else {
                            console.log("Authenticated successfully with payload:", authData);
                        }
                    }
                    var fireBaseInfo = new Firebase("https://e3education.firebaseio.com/");
                    var loginRef = fireBaseInfo.child("user");
                    loginRef.authWithPassword({
                        email: this.email,
                        password: this.password
                    }, authHandler);
                    alert(this.email);
                };
                LoginComponent.prototype.onSubmit = function (value) {
                    alert(value);
                    console.log('you submitted value:', value);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  {{diagnostic}}\n  <div class=\"row\">\n  <div class=\"col s6 offset-s3 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Login</span>\n        <form [ngFormModel]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n          <input [(ngModel)]=\"email\" type=\"email\" placeholder=\"Your email\">\n          <input ngControl=\"password\" type=\"password\" placeholder=\"Your password\">\n          <button type=\"submit\">Log in</button>\n        </form>\n        TODO: Remove this: {{email}}\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s6 offset-s3 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <h2>Login</h2>\n        <form #f=\"ngForm\"\n              (ngSubmit)=\"onSubmit(f)\"\n              class=\"ui form\">\n\n          <div class=\"field\">\n            <input ngControl=\"email\" type=\"email\" placeholder=\"Your email\">\n            <input ngControl=\"password\" type=\"password\" placeholder=\"Your password\">\n            <button type=\"submit\">Log in</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            firebase_service_1.FireBaseService
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, firebase_service_1.FireBaseService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=authenticate.component.js.map