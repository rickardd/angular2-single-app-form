System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NewUserValidators;
    return {
        setters:[],
        execute: function() {
            NewUserValidators = (function () {
                function NewUserValidators() {
                }
                NewUserValidators.shouldBeValidEmail = function (control) {
                    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    var isRegExValid = regex.test(control.value);
                    console.log("init isValidEmail", control.value, isRegExValid);
                    if (!isRegExValid) {
                        return { isValidEmail: false };
                    }
                    return null;
                };
                return NewUserValidators;
            }());
            exports_1("NewUserValidators", NewUserValidators);
        }
    }
});
//# sourceMappingURL=user.valitators.js.map