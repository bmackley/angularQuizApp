System.register(['angular2/core', 'angular2/router', './concept.service'], function(exports_1, context_1) {
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
    var core_1, router_1, concept_service_1;
    var ConceptDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (concept_service_1_1) {
                concept_service_1 = concept_service_1_1;
            }],
        execute: function() {
            ConceptDetailComponent = (function () {
                function ConceptDetailComponent(_conceptService, _routeParams) {
                    this._conceptService = _conceptService;
                    this._routeParams = _routeParams;
                }
                ConceptDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //the + here converts the string passed by the url into a number
                    var id = +this._routeParams.get('id');
                    this._conceptService.getConcept(id)
                        .then(function (concept) { return _this.concept = concept; });
                };
                ConceptDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ConceptDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-concept-detail',
                        template: "\n  <my-concept-detail [concept]=\"selectedConcept\"></my-concept-detail>\n  <div *ngIf=\"subject\">\n    <h2>{{concept.name}} details!</h2>\n    <div><label>id: </label>{{concept.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"concept.name\" placeholder=\"name\"/>\n    </div>\n  </div>\n  <p>Hello</p>\n  <button (click)=\"goBack()\">Back</button>\n  ",
                        inputs: ['subject']
                    }), 
                    __metadata('design:paramtypes', [concept_service_1.ConceptService, router_1.RouteParams])
                ], ConceptDetailComponent);
                return ConceptDetailComponent;
            }());
            exports_1("ConceptDetailComponent", ConceptDetailComponent);
        }
    }
});
//# sourceMappingURL=concept-detail.component.js.map