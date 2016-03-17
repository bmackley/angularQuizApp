System.register(['./mock-subjects', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_subjects_1, core_1;
    var SubjectService;
    return {
        setters:[
            function (mock_subjects_1_1) {
                mock_subjects_1 = mock_subjects_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubjectService = (function () {
                function SubjectService() {
                }
                SubjectService.prototype.getSubjects = function () {
                    return Promise.resolve(mock_subjects_1.Subjects);
                };
                SubjectService.prototype.getSubject = function (id) {
                    return Promise.resolve(mock_subjects_1.Subjects).then(function (subjects) { return subjects.filter(function (subject) { return subject.id === id; })[0]; });
                };
                SubjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SubjectService);
                return SubjectService;
            }());
            exports_1("SubjectService", SubjectService);
        }
    }
});
//# sourceMappingURL=subject.service.js.map