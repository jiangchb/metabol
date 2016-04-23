import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AnalyzeComponent} from './analyze/analyze.component';
import {SearchComponent} from './search/search.component';
import {DetailsComponent} from './details/details.component';
import {MetaboliteService} from '../services/metabolite.service';
import {ReactionService} from '../services/reaction.service';


@Component({
    selector: 'app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [MetaboliteService, ReactionService]
})
@RouteConfig([
    {
        path: '/search/...', name: 'Search',
        component: SearchComponent, useAsDefault: true
    },
    { path: '/analyze/...', name: 'Analyze', component: AnalyzeComponent },
    { path: '/details/...', name: 'Details', component: DetailsComponent }

])
export class AppComponent { }
