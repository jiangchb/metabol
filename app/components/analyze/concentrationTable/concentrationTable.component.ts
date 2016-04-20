import {Component, Input} from 'angular2/core';
import {MetaboliteConcentration} from '../../../services/analyze.service';

@Component({
    selector: 'concentration-table',
    templateUrl: '/app/components/analyze/concentrationTable/concentrationTable.html',
    styleUrls: ['app/components/analyze/concentrationTable/concentrationTable.css']
})
export class ConcentrationTableComponent {
    @Input() conTable: Array<MetaboliteConcentration>;

    remove(index) {
      this.conTable.splice(index,1);
    }
}
