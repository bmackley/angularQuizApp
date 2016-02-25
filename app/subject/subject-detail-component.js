System.register(['angular2/core', 'angular2/router', './subject.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, subject_service_1;
    var SubjectDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            }],
        execute: function() {
            SubjectDetailComponent = (function () {
                function SubjectDetailComponent(_subjectService, _routeParams) {
                    this._subjectService = _subjectService;
                    this._routeParams = _routeParams;
                }
                SubjectDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //the + here converts the string passed by the url into a number
                    var id = +this._routeParams.get('id');
                    this._subjectService.getSubject(id)
                        .then(function (subject) { return _this.subject = subject; });
                };
                SubjectDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                SubjectDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-subject-detail',
                        template: "\n  <my-subject-detail [subject]=\"selectedSubject\"></my-subject-detail>\n  <div *ngIf=\"subject\">\n    <h2>{{subject.name}} details!</h2>\n    <div><label>id: </label>{{subject.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"subject.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  <p>Hello</p>\n  <button (click)=\"goBack()\">Back</button>\n  ",
                        inputs: ['subject']
                    }), 
                    __metadata('design:paramtypes', [subject_service_1.SubjectService, router_1.RouteParams])
                ], SubjectDetailComponent);
                return SubjectDetailComponent;
            })();
            exports_1("SubjectDetailComponent", SubjectDetailComponent);
        }
    }
});
//# sourceMappingURL=subject-detail-component.js.map