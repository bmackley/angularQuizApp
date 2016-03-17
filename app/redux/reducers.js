System.register(['./initial-state'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var initial_state_1;
    function rootReducer(state, action) {
        if (state === void 0) { state = initial_state_1.InitialState; }
        switch (action.type) {
            default: {
                return state;
            }
        }
    }
    exports_1("rootReducer", rootReducer);
    return {
        setters:[
            function (initial_state_1_1) {
                initial_state_1 = initial_state_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=reducers.js.map