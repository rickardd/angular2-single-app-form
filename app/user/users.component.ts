import {Component, OnInit} from 'angular2/core';
import {UserService} from './user.service';
import {ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';

@Component({
    selector: 'users',
    templateUrl: 'app/user/users.component.html',
    directives: [
      ROUTER_DIRECTIVES,
      RouterLink
    ],
    providers:[
      UserService
    ]
})

export class UsersComponent implements OnInit {

  constructor( private _usersService : UserService ){

  }

  users : {};

  ngOnInit(){

    this._usersService.getUsers()
            .subscribe( response => {
              this.users = response;
            } );
  }
}


