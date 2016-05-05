import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {SearchPageComponent} from './searchPage/searchPage.component';
import {SearchResultComponent} from './searchResult/searchResult.component';

@Component({
    selector: 'search',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/page', name: 'Page', component: SearchPageComponent, useAsDefault: true },
    { path: '/result/:searchTerm/:searchTerm2', name: 'Result', component: SearchResultComponent }
])
export class SearchComponent { }
