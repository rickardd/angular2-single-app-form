import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {CanDeactivate, Router, RouteParams} from 'angular2/router';
// import {Router} from 'angular2/router';
import {Http} from 'angular2/http';

import {BasicValidators} from '../shared/basicValidator';
import {NewUserValidators} from './user.valitators';
import {UserService} from './user.service';
import {User, Address} from './user';

@Component({
    selector: 'posts',
    templateUrl: 'app/user/user.component.html',
    directives: [
      // Router
    ],
    providers:[
      UserService
    ]
})

export class NewUserComponent implements CanDeactivate {

  form : ControlGroup;

  isValidForm = true;

  title = String();

  user = new User();

  constructor(
                private _fb : FormBuilder,
                private _http: Http,
                private _router : Router,
                private _userService : UserService,
                private _routeParams : RouteParams
              )
              {

              }

  ngOnInit(){

    this.form = this._fb.group({
                    name: ['', Validators.required],
                    email: ['', BasicValidators.email],
                    phone: [],
                    address: this._fb.group({
                      street: [],
                      suite: [],
                      city: [],
                      zipcode: []
                    })
                 });

    var id = this._routeParams.get("id");

    this.title = (id) ? "Edit user": "New user";

    if(!id)
      return;

    this._userService.getUser( id )
            .subscribe(
              // sets the this.user with the object from the server
              user => this.user = user,
              response => {
                console.log(response.status);
                if(response.status == 404 ){
                  this._router.navigate(['PageNotFound'])
                }
              }
            )
  }




  onSubmit(){
    this.isValidForm = true;

    if(this.user.id){
      console.log("update");
      this._userService.updateUser( this.user )
            .subscribe( response => {
              this._router.navigate(['Users'])
            })
    }
    else{
      console.log("add");
      this._userService.addUser( this.form.value )
              .subscribe( response => {
                // this.form.markAsPristine might come in the future. It will clean the form
                this._router.navigate(['Users']);
              })
    }



  }

  routerCanDeactivate( next, previous ){
    // if form.valid or if disclamers agreed.
    return confirm('Are you sure you want to leave the page?');
  }
}