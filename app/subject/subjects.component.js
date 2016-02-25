System.register(['angular2/core', './subject-detail.component', './subject.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, subject_detail_component_1, subject_service_1, router_1;
    var SubjectsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (subject_detail_component_1_1) {
                subject_detail_component_1 = subject_detail_component_1_1;
            },
            function (subject_service_1_1) {
                subject_service_1 = subject_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SubjectsComponent = (function () {
                function SubjectsComponent(_router, _subjectService) {
                    this._router = _router;
                    this._subjectService = _subjectService;
                }
                SubjectsComponent.prototype.getSubjects = function () {
                    var _this = this;
                    this._subjectService.getSubjects().then(function (subjects) { return _this.subjects = subjects; });
                };
                SubjectsComponent.prototype.ngOnInit = function () {
                    this.getSubjects();
                };
                SubjectsComponent.prototype.onSelect = function (subject) { this.selectedSubject = subject; };
                SubjectsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['Concepts', { id: this.selectedSubject.id }]);
                };
                SubjectsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-subjects',
                        templateUrl: 'app/subject/subjects.component.html',
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .subjects {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .subjects li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .subjects li.selected:hover {\n      color: white;\n    }\n    .subjects li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .subjects .text {\n      position: relative;\n      top: -3px;\n    }\n    .subjects .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
                        directives: [subject_detail_component_1.SubjectDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, subject_service_1.SubjectService])
                ], SubjectsComponent);
                return SubjectsComponent;
            })();
            exports_1("SubjectsComponent", SubjectsComponent);
        }
    }
});
//# sourceMappingURL=subjects.component.js.map