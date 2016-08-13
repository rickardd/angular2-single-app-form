System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', '../shared/basicValidator', './user.service', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, basicValidator_1, user_service_1, user_1;
    var NewUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (basicValidator_1_1) {
                basicValidator_1 = basicValidator_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            NewUserComponent = (function () {
                function NewUserComponent(_fb, _http, _router, _userService, _routeParams) {
                    this._fb = _fb;
                    this._http = _http;
                    this._router = _router;
                    this._userService = _userService;
                    this._routeParams = _routeParams;
                    this.isValidForm = true;
                    this.title = String();
                    this.user = new user_1.User();
                }
                NewUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.form = this._fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', basicValidator_1.BasicValidators.email],
                        phone: [],
                        address: this._fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                    var id = this._routeParams.get("id");
                    this.title = (id) ? "Edit user" : "New user";
                    if (!id)
                        return;
                    this._userService.getUser(id)
                        .subscribe(
                    // sets the this.user with the object from the server
                    function (user) { return _this.user = user; }, function (response) {
                        console.log(response.status);
                        if (response.status == 404) {
                            _this._router.navigate(['PageNotFound']);
                        }
                    });
                };
                NewUserComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.isValidForm = true;
                    if (this.user.id) {
                        console.log("update");
                        this._userService.updateUser(this.user)
                            .subscribe(function (response) {
                            _this._router.navigate(['Users']);
                        });
                    }
                    else {
                        console.log("add");
                        this._userService.addUser(this.form.value)
                            .subscribe(function (response) {
                            // this.form.markAsPristine might come in the future. It will clean the form
                            _this._router.navigate(['Users']);
                        });
                    }
                };
                NewUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    // if form.valid or if disclamers agreed.
                    return confirm('Are you sure you want to leave the page?');
                };
                NewUserComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/user/user.component.html',
                        directives: [],
                        providers: [
                            user_service_1.UserService
                        ]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http, router_1.Router, user_service_1.UserService, router_1.RouteParams])
                ], NewUserComponent);
                return NewUserComponent;
            }());
            exports_1("NewUserComponent", NewUserComponent);
        }
    }
});
//# sourceMappingURL=user.component.js.map