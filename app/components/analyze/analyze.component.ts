import {Component} from 'angular2/core';
import {MeasurementComponent} from './measurement/measurement.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ManualComponent} from './manual/manual.component';

@Component({
    selector: 'analyze',
    templateUrl: '/app/components/analyze/analyze.html',
    directives: [MeasurementComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/measurement', name: 'Measurement',
        component: MeasurementComponent, useAsDefault: true
    },
    {
        path: '/upload-measurement', name: 'Upload',
        component: MeasurementComponent
    },
    {
        path: '/add-manual-measurement', name: 'Manual',
        component: ManualComponent
    }
])
export class AnalyzeComponent { }
