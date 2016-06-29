import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams, Router} from 'angular2/router';
import {AnalyzeService} from '../../../services/analyze/analyze.service';

@Component({
    selector: 'anaylze',
    templateUrl: '/app/components/panel/analyze/analyze.html',
})
export class AnalyzeComponent {

    constructor(private _AnalyzeService: AnalyzeService,private http: Http){

    }

    getList(){
        this._AnalyzeService.getList((data) => {
            console.log(data);

        });

    }


}
