System.register(['angular2/core', 'angular2/router', './navbar.component', './posts.component', './user/users.component', './user/user.component', './page-not-found.component'], function(exports_1, context_1) {
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
    var core_1, router_1, navbar_component_1, posts_component_1, users_component_1, user_component_1, page_not_found_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (page_not_found_component_1_1) {
                page_not_found_component_1 = page_not_found_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/new', name: 'NewUser', component: user_component_1.NewUserComponent },
                        { path: '/users/:id', name: 'EditUser', component: user_component_1.NewUserComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/not-found', name: 'PageNotFound', component: page_not_found_component_1.PageNotFoundComponent },
                        { path: '*others', name: 'Other', redirectTo: ['Users'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <navBar></navBar>\n      <router-outlet></router-outlet>\n    ",
                        directives: [
                            navbar_component_1.NavBarComponent,
                            users_component_1.UsersComponent,
                            user_component_1.NewUserComponent,
                            posts_component_1.PostsComponent,
                            page_not_found_component_1.PageNotFoundComponent,
                            router_1.ROUTER_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map