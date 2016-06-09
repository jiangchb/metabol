import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ProfileComponent} from './profile/profile.component';
import {AnalyzeComponent} from './analyze/analyze.component';

@Component({
    selector: 'panel',
    templateUrl: '/app/components/panel/panel.html',
    styleUrls: [
        'app/components/panel/css/font-awesome.min.css',
        'app/components/panel/css/sb-admin-2.css',
        'app/components/panel/css/style.css'
    ],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/profile', name: 'Profile', component: ProfileComponent, useAsDefault: true },
    { path: '/analyze', name: 'Analyze', component: AnalyzeComponent }
])
export class PanelComponent { }
