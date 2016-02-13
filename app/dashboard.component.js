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
    var DashboardComponent;
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
            DashboardComponent = (function () {
                function DashboardComponent(_router, _subjectService) {
                    this._router = _router;
                    this._subjectService = _subjectService;
                    this.subjects = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._subjectService.getSubjects()
                        .then(function (subjects) { return _this.subjects = subjects.slice(1, 5); });
                };
                DashboardComponent.prototype.gotoDetail = function (subject) {
                    var link = ['SubjectDetail', { id: subject.id }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        template: "<h3>Top Subjects</h3>\n            <div class=\"grid grid-pad\">\n                <div *ngFor=\"#subject of subjects\" (click)=\"gotoDetail(subject)\" class=\"col-1-4\" >\n                    <div class=\"module subject\">\n                        <h4>{{subject.name}}</h4>\n                    </div>\n                </div>\n            </div>"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, subject_service_1.SubjectService])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map