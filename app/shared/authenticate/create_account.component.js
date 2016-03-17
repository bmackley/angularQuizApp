System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var SignUpComponent;
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
            }],
        execute: function() {
            SignUpComponent = (function () {
                function SignUpComponent(builder, _router) {
                    this._router = _router;
                    this.signupForm = builder.group({
                        email: ["", common_1.Validators.required],
                        password: ["", common_1.Validators.required],
                        password_verified: ["", common_1.Validators.required]
                    });
                }
                SignUpComponent.prototype.doSignUp = function (email, password, verifiedPassword) {
                    // alert(this.email);
                    // var fireBaseInfo = new Firebase("https://e3education.firebaseio.com/");
                    // fireBaseInfo.push({
                    //   email : {
                    //     email    : this.email,
                    //     password : this.password
                    //   }
                    // });
                    var ref = new Firebase("https://e3education.firebaseio.com/");
                    ref.createUser({
                        email: email,
                        password: password
                    }, function (error, userData) {
                        if (error) {
                            console.log("Error creating user:", error);
                        }
                        else {
                            console.log("Successfully created user account with uid:", userData.uid);
                            alert('successfully created account');
                        }
                    });
                };
                SignUpComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  {{diagnostic}}\n  <div class=\"row\">\n  <div class=\"col s6 offset-s3 m6 offset-m3 l6 offset-l3\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n        <span class=\"card-title\">Create account</span>\n        <form [ngFormModel]=\"signupForm\" (ngSubmit)=\"doSignUp(emailInput.value, passwordInput.value, passwordVerifiedInput)\">\n          <input #emailInput type=\"email\" placeholder=\"Your email\">\n          <input #passwordInput type=\"password\" placeholder=\"Your password\">\n          <input #passwordVerifiedInput type=\"password\" placeholder=\"Verify your password\">\n          <button type=\"submit\">Submit</button>\n        </form>\n    </div>\n  </div>\n</div>\n\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router])
                ], SignUpComponent);
                return SignUpComponent;
            }());
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});
//# sourceMappingURL=create_account.component.js.map