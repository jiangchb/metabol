import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MetaboliteDetailsComponent} from './metaboliteDetails/metaboliteDetails.component';
import {ReactionDetailsComponent} from './reactionDetails/reactionDetails.component';

 @Component ({
   template: `<router-outlet></router-outlet>`,
   selector: 'details',
   directives: [ROUTER_DIRECTIVES]

 })
 @RouteConfig([
     { path: '/metabolite', name: 'MetaboliteDetails', component: MetaboliteDetailsComponent, useAsDefault: true},
     { path: '/reaction', name: 'ReactionDetails', component: ReactionDetailsComponent }
 ])
export class DetailsComponent {}
