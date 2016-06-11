import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AnalyzeComponent} from './analyze/analyze.component';
import {SearchComponent} from './search/search.component';
import {DetailsComponent} from './details/details.component';
import {DocumentationComponent} from './documentation/documentation.component';
import {PanelComponent} from './panel/panel.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';

import 'rxjs/Rx';


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
    { path: '/panel/...', name: 'Panel', component: PanelComponent },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/signup', name: 'Signup', component: SignupComponent },
    {
        path: '/documentation', name: 'Documentation',
        component: DocumentationComponent
    }
])
export class AppComponent { }
