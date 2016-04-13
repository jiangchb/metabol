import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';

@Component({
    selector: 'app',
    templateUrl: '/app/components/app.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true }
])
export class AppComponent { }
