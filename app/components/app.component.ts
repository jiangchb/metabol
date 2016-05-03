import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AnalyzeComponent} from './analyze/analyze.component';
import {SearchComponent} from './search/search.component';
import {DetailsComponent} from './details/details.component';
import 'rxjs/Rx';
import {DocumentationComponent} from './documentation/documentation.component';


@Component({
    selector: 'app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
    {
        path: '/search/...', name: 'Search',
        component: SearchComponent, useAsDefault: true
    },
    { path: '/analyze/...', name: 'Analyze', component: AnalyzeComponent },
    { path: '/details/...', name: 'Details', component: DetailsComponent },
    { path: '/documentation', name: 'Documentation', component: DocumentationComponent }


])
export class AppComponent { }
