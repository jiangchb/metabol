import {Component} from 'angular2/core';
import {FbaService} from '../../../services/fba/fba.service';

@Component({
    selector: 'fba-result',
    templateUrl: '/app/components/analyze/fbaResult/fbaResult.html',
})
export class FbaResultComponent {
    result: any;

    constructor(private fba: FbaService) { }

    analyze() {
        this.fba.getNextIteration((data) => this.result = data);
    }
}
