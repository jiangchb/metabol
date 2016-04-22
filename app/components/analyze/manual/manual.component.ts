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
    concenration = ['Increase Slightly', 'Increase Dyramaticly',
        'Decrease Slightly', 'Decrease Dyramaticly', 'Exact Value'];
    form: ControlGroup;
    exactValue: boolean;
    conTable: Array<MetaboliteConcentration>;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            "name": ["", Validators.required],
            "concentration": ["", Validators.required],
            "value": [""]
        });

        this.conTable = new Array<MetaboliteConcentration>();
    }

    concentrationChange() {
        if (this.form.controls['concentration'].value == 'Exact Value')
            this.exactValue = true;
        else
            this.exactValue = false;
    }

    onSubmit(value) {
        let c = new MetaboliteConcentration();
        c.name = value['name'];
        c.concentration = value['concentration'];
        c.exactValue = value['value'];
        this.conTable.push(c);
        // this.form = this.fb.group({
        //     "name": ["", Validators.required],
        //     "concentration": ["", Validators.required],
        //     "value": [""]
        // });
        //
        // // .forEach((name, control) => {
        // //     control.updateValue('');
        // //     control.setErrors(null);
        // // });
    }

    analyze() { }
}
