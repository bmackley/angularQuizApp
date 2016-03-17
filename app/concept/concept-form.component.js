System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ConceptFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConceptFormComponent = (function () {
                function ConceptFormComponent() {
                    this.subjects = [11, 12, 13, 14, 15];
                    this.model = new Concept(18, 'Multivariable', this.subjects[0]);
                    this.submitted = false;
                }
                ConceptFormComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(ConceptFormComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                ConceptFormComponent = __decorate([
                    core_1.Component({
                        selector: 'concept-form',
                        template: '<concept-form></concept-form>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConceptFormComponent);
                return ConceptFormComponent;
            }());
            exports_1("ConceptFormComponent", ConceptFormComponent);
        }
    }
});
//# sourceMappingURL=concept-form.component.js.map