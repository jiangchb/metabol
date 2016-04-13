import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {AnalyzeComponent} from './analyze/analyze.component';
import {SearchComponent} from './search/search.component';


@Component({
    selector: 'app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/search', name: 'Search', component: SearchComponent, useAsDefault: true },
    { path: '/analyze', name: 'Analyze', component: AnalyzeComponent }
])
export class AppComponent { }
