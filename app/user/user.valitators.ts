import {Contol} from 'angular2/common';



export class NewUserValidators {

  static shouldBeValidEmail( control : Contol ){


     var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     var isRegExValid = regex.test( control.value);
     console.log("init isValidEmail", control.value ,isRegExValid);
     if( !isRegExValid ){
       return { isValidEmail: false };
     }

     return null;
  }

}