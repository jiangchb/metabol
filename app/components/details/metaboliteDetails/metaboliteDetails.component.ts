import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'metabolite-detail',
  templateUrl: 'app/components/details/metaboliteDetails/metaboliteDetails.html',
  styleUrls:['app/components/details/metaboliteDetails/metaboliteDetails.css'],
  directives:[ROUTER_DIRECTIVES],
})

export class MetaboliteDetailsComponent { }
