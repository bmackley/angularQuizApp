System.register(['angular2/core', 'angular2/common', 'angular2/router', './firebase.service', '../../redux/actions'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, common_1, router_1, firebase_service_1, actions_1;
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
            },
            function (actions_1_1) {
                actions_1 = actions_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(builder, _router, _FireBaseService, store) {
                    this._router = _router;
                    this._FireBaseService = _FireBaseService;
                    this.loginForm = builder.group({
                        email: ["", common_1.Validators.required],
                        password: ["", common_1.Validators.required]
                    });
                    this.store = store;
                }
                LoginComponent.prototype.getValue = function () {
                    console.log(JSON.stringify(this.loginForm.value, null, 2));
                    //return JSON.stringify(this.loginForm.value, null, 2)
                };
                LoginComponent.prototype.doLogin = function (email, password) {
                    console.log(email);
                    console.log('password' + password);
                    actions_1.Actions.authenticateUser.execute(this.store, email, password);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  {{diagnostic}}\n  <div class=\"row\">\n  <div class=\"col s6 offset-s3 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Login</span>\n        <form [ngFormModel]=\"loginForm\" (ngSubmit)=\"doLogin(emailInput.value, passwordInput.value)\">\n          <input #emailInput type=\"email\" placeholder=\"Your email\">\n          <input #passwordInput type=\"password\" placeholder=\"Your password\">\n          <button type=\"submit\">Log in</button>\n        </form>\n        TODO: Remove this: {{email}}\n    </div>\n  </div>\n</div>\n<!--\n<div class=\"row\">\n  <div class=\"col s6 offset-s3 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <h2>Login</h2>\n        <form #f=\"ngForm\"\n              (ngSubmit)=\"onSubmit(f)\"\n              class=\"ui form\">\n\n          <div class=\"field\">\n            <input ngControl=\"email\" type=\"email\" placeholder=\"Your email\">\n            <input ngControl=\"password\" type=\"password\" placeholder=\"Your password\">\n            <button type=\"submit\">Log in</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n-->\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            firebase_service_1.FireBaseService
                        ]
                    }),
                    __param(3, core_1.Inject('REDUX_STORE')), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, firebase_service_1.FireBaseService, Object])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=authenticate.component.js.map