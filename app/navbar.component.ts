import {Component} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';

@Component({
    selector: 'navBar',
    templateUrl: 'app/templates/nav-bar.template.html',
    directives: [
      RouterLink
    ]


})

export class NavBarComponent {
  constructor(){

  }

}