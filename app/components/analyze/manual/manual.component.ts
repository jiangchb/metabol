import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {ConcentrationTableComponent} from '../concentrationTable/concentrationTable.component';
import {MetaboliteConcentration} from '../../../services/analyze.service';

@Component({
    selector: 'manual-measurement',
    templateUrl: '/app/components/analyze/manual/manual.html',
    directives: [ConcentrationTableComponent]
})
export class ManualComponent {
    conTable: Array<MetaboliteConcentration>;

    constructor(private fb: FormBuilder) {
        this.conTable = new Array<MetaboliteConcentration>();
    }

    analyze() {
      console.log(JSON.stringify(this.conTable));
    }
}
