System.register(['angular2/core', './concept-detail.component', './concept.service', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, concept_detail_component_1, concept_service_1, router_1;
    var ConceptsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (concept_detail_component_1_1) {
                concept_detail_component_1 = concept_detail_component_1_1;
            },
            function (concept_service_1_1) {
                concept_service_1 = concept_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ConceptsComponent = (function () {
                function ConceptsComponent(_router, _conceptService) {
                    this._router = _router;
                    this._conceptService = _conceptService;
                }
                ConceptsComponent.prototype.getConcepts = function () {
                    var _this = this;
                    this._conceptService.getConcepts().then(function (concepts) { return _this.concepts = concepts; });
                };
                ConceptsComponent.prototype.ngOnInit = function () {
                    this.getConcepts();
                };
                ConceptsComponent.prototype.onSelect = function (concept) { this.selectedConcept = concept; };
                ConceptsComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['ConceptDetail', { id: this.selectedConcept.id }]);
                };
                ConceptsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-concepts',
                        template: "\n    <h1>{{title}}</h1>\n    <h2>My Concepts</h2>\n    <ul class=\"subjects\">\n      <li *ngFor=\"#concept of concepts\"\n        [class.selected]=\"concept === selectedConcept\"\n        (click)=\"onSelect(concept)\">\n        <span class=\"badge\">{{concept.id}}</span> {{concept.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedConcept\">\n      <h2>\n        {{selectedConcept.name | uppercase}} will have questions next week!\n      </h2>\n      <button (click)=\"gotoDetail()\">View Questions</button>\n    </div>\n  ",
                        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .subjects {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 10em;\n    }\n    .subjects li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0em;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .subjects li.selected:hover {\n      color: white;\n    }\n    .subjects li:hover {\n      color: #607D8B;\n      background-color: #EEE;\n      left: .1em;\n    }\n    .subjects .text {\n      position: relative;\n      top: -3px;\n    }\n    .subjects .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0em 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0px 0px 4px;\n    }\n  "],
                        directives: [concept_detail_component_1.ConceptDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, (typeof (_a = typeof concept_service_1.ConceptService !== 'undefined' && concept_service_1.ConceptService) === 'function' && _a) || Object])
                ], ConceptsComponent);
                return ConceptsComponent;
                var _a;
            }());
            exports_1("ConceptsComponent", ConceptsComponent);
        }
    }
});
//# sourceMappingURL=questions.component.js.map