import {Component} from 'angular2/core';
import {RouteConfig, Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchPageComponent} from './searchPage/searchPage.component';
import {SearchResultComponent} from './searchResult/searchResult.component';
import {DetailsComponent} from '../details/details.component';
import {MetaboliteDetailsComponent} from '../details/metaboliteDetails/metaboliteDetails.component';
import {ReactionDetailsComponent} from '../details/reactionDetails/reactionDetails.component';
@Component({
    selector: 'search',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([

    { path: '/page', name: 'Page', component: SearchPageComponent, useAsDefault: true },
    { path: '/details/...', name: 'Details', component: DetailsComponent },
    {path: '/metabolite/:metaboliteId', name: 'MetaboliteDetails', component: MetaboliteDetailsComponent},
    { path: '/details/reaction/:reactionId', name: 'ReactionDetails', component: ReactionDetailsComponent },

])
export class SearchComponent { }
