import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {ConcentrationTableComponent} from '../concentrationTable/concentrationTable.component';
import {MetaboliteConcentration} from '../../../services/analyze.service';

@Component({
    selector: 'upload-measurement',
    templateUrl: '/app/components/analyze/upload/upload.html',
    directives: [ConcentrationTableComponent]
})
export class UploadComponent {
    conTable: Array<MetaboliteConcentration>;

    constructor(fb: FormBuilder) {
      this.conTable = new Array<MetaboliteConcentration>();
    }

    analyze() { }
}
