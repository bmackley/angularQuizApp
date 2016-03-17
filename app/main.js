System.register(['angular2/platform/browser', './app.component', 'angular2/core', '../node_modules/redux/dist/redux.js', './redux/reducers'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, core_1, redux_js_1, reducers_1;
    var store;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (redux_js_1_1) {
                redux_js_1 = redux_js_1_1;
            },
            function (reducers_1_1) {
                reducers_1 = reducers_1_1;
            }],
        execute: function() {
            store = redux_js_1.createStore(reducers_1.rootReducer);
            browser_1.bootstrap(app_component_1.AppComponent, [core_1.provide('REDUX_STORE', { useValue: store })]);
        }
    }
});
// bootstrap(AppComponent, [
//   provide(defaultFirebase, {
//     useValue: 'https://e3education.firebaseio.com/'
//   }),
//   FIREBASE_PROVIDERS
// ])
//# sourceMappingURL=main.js.map