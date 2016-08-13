import { Injectable } from 'angular2/core';
import {Http} from 'angular2/http';
// import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()

export class UserService {

  private url = "http://jsonplaceholder.typicode.com/users";

  constructor( private _http : Http){

  }
  getUsers(){
    return this._http.get( this.url )
                .map( response => response.json());
  }
  getUser( userId ){
    return this._http.get( this.userUrl( userId ) )
                .map( response => response.json());
  }
  addUser( user ){
    // whould go to e.g www.domain.com/user/create
    return this._http.post( this.url, JSON.stringify(user) )
  }
  updateUser( user ){
    // whould go to e.g www.domain.com/user/create
    return this._http.put( this.userUrl( user.id ), JSON.stringify(user) )
  }
  deleteUser( user ){
    // whould go to e.g www.domain.com/user/create
    return this._http.delete( this.userUrl( user.id ) )
  }

  private
    userUrl( userId ){
      return this.url + '/' + userId;
    }
}
