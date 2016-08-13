import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {PostsComponent} from './posts.component';
import {UsersComponent} from './user/users.component';
import {NewUserComponent} from './user/user.component';
import {PageNotFoundComponent} from './page-not-found.component';

@RouteConfig([
  { path: '/users', name: 'Users', component: UsersComponent},
  { path: '/users/new', name: 'NewUser', component: NewUserComponent},
  { path: '/users/:id', name: 'EditUser', component: NewUserComponent},
  { path: '/posts', name: 'Posts', component: PostsComponent},
  { path: '/not-found', name: 'PageNotFound', component: PageNotFoundComponent},
  { path: '*others', name: 'Other', redirectTo: ['Users']}
])

@Component({
    selector: 'my-app',
    template: `
      <navBar></navBar>
      <router-outlet></router-outlet>
    `,
    directives: [
      NavBarComponent,
      UsersComponent,
      NewUserComponent,
      PostsComponent,
      PageNotFoundComponent,
      ROUTER_DIRECTIVES
    ]
})
export class AppComponent { }

