import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MetaboliteDetailsComponent} from './metaboliteDetails/metaboliteDetails.component';
import {ReactionDetailsComponent} from './reactionDetails/reactionDetails.component';

 @Component ({
   selector: 'detail',
   template: `<router-outlet></router-outlet>`,
   directives: [ROUTER_DIRECTIVES]

 })
 @RouteConfig([
     { path: '/metabolite/:metaboliteId', name: 'MetaboliteDetails', component: MetaboliteDetailsComponent},
     { path: '/reaction/:reactionId', name: 'ReactionDetails', component: ReactionDetailsComponent }
 ])
export class DetailsComponent {}
