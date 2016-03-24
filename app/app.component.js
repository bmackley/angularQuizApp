System.register(['angular2/core', './subject/subject.service', './subject/subjects.component', './concept/concepts.component', './concept/concept.service', './dashboard.component', './subject/subject-detail.component', './shared/authenticate/authenticate.component', './shared/authenticate/create_account.component', 'angular2/router'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, subject_service_1, subjects_component_1, concepts_component_1, concept_service_1, dashboard_component_1, subject_detail_component_1, authenticate_component_1, create_account_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            },
            function (subjects_component_1_1) {
                subjects_component_1 = subjects_component_1_1;
            },
            function (concepts_component_1_1) {
                concepts_component_1 = concepts_component_1_1;
            },
            function (concept_service_1_1) {
                concept_service_1 = concept_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (subject_detail_component_1_1) {
                subject_detail_component_1 = subject_detail_component_1_1;
            },
            function (authenticate_component_1_1) {
                authenticate_component_1 = authenticate_component_1_1;
            },
            function (create_account_component_1_1) {
                create_account_component_1 = create_account_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(store) {
                    this.title = 'Learning Materials';
                    this.unsubscribe = store.subscribe(this.mapStateToThis(store));
                }
                AppComponent.prototype.mapStateToThis = function (store) {
                    var _this = this;
                    return function () {
                        var state = store.getState();
                        _this.username = state.currentUser.email;
                    };
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    this.unsubscribe;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <!--look up flexbox-->\n    <h1>{{title}}</h1>\n    <nav class=\"light-blue darken-4\">\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['Dashboard']\" class=\"brand-logo\">E3 Education</a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['Subjects']\">Subjects</a></li>\n      <li><a [routerLink]=\"['Login']\">Login</a></li>\n      <li><a [routerLink]=\"['SignUp']\">Sign Up</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n      <li><a [routerLink]=\"['Subjects']\">Subjects</a></li>\n      <li><a [routerLink]=\"['Login']\">Login</a></li>\n      <li><a [routerLink]=\"['SignUp']\">Sign Up</a></li>\n      </ul>\n    </div>\n  </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            subject_service_1.SubjectService,
                            concept_service_1.ConceptService,
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/detail/:id',
                            name: 'SubjectDetail',
                            component: subject_detail_component_1.SubjectDetailComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/subjects',
                            name: 'Subjects',
                            component: subjects_component_1.SubjectsComponent
                        },
                        {
                            path: '/concepts',
                            name: 'Concepts',
                            component: concepts_component_1.ConceptsComponent
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: authenticate_component_1.LoginComponent
                        },
                        {
                            path: '/sign_up',
                            name: 'SignUp',
                            component: create_account_component_1.SignUpComponent
                        }
                    ]),
                    __param(0, core_1.Inject('REDUX_STORE')), 
                    __metadata('design:paramtypes', [Object])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map