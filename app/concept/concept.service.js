System.register(['./mock-concepts', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_concepts_1, core_1;
    var ConceptService;
    return {
        setters:[
            function (mock_concepts_1_1) {
                mock_concepts_1 = mock_concepts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConceptService = (function () {
                function ConceptService() {
                }
                ConceptService.prototype.getConcepts = function () {
                    return Promise.resolve(mock_concepts_1.Concepts);
                };
                ConceptService.prototype.getConcept = function (id) {
                    return Promise.resolve(mock_concepts_1.Concepts).then(function (concepts) { return concepts.filter(function (subject) { return subject.id === id; })[0]; });
                };
                ConceptService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ConceptService);
                return ConceptService;
            })();
            exports_1("ConceptService", ConceptService);
        }
    }
});
//# sourceMappingURL=concept.service.js.map