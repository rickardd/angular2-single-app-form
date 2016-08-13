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

  users : any[];

  ngOnInit(){

    this._usersService.getUsers()
            .subscribe( response => {
              this.users = response;
            });
  }

  deleteUser(user){
    if(confirm("Are you sure you want to delete " + user.name + " ?")){

      var index = this.users.indexOf(user);

      this.users.splice(index, 1);

      this._usersService.deleteUser(user)
            .subscribe( null, error => {
                alert("Something we went wrong. User is not deleted.");
                this.users.splice(index, 0, user);
            })

    }
  }
}


