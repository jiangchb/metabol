import {Component, Input} from 'angular2/core';
import {MetaboliteConcentration} from '../../../services/analyze.service';

@Component({
    selector: 'concentration-table',
    templateUrl: '/app/components/analyze/concentrationTable/concentrationTable.html',
})
export class ConcentrationTableComponent {
    @Input() conTable: Array<MetaboliteConcentration>;
}
