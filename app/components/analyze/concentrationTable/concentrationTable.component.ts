import {Component, Input} from 'angular2/core';
import {MetaboliteConcentration} from '../../../services/analyze.service';
import {Control, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'concentration-table',
    templateUrl: '/app/components/analyze/concentrationTable/concentrationTable.html',
    styleUrls: ['app/components/analyze/concentrationTable/concentrationTable.css']
})
export class ConcentrationTableComponent {
    @Input() conTable: Array<MetaboliteConcentration>;

    concenration = ['Increase Slightly', 'Increase Dyramaticly',
        'Decrease Slightly', 'Decrease Dyramaticly', 'Exact Value'];

    form: ControlGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.createForm();
    }

    remove(index) {
        this.conTable.splice(index, 1);
    }

    createForm() {
        return this.fb.group({
            "name": ["", Validators.required],
            "concentration": ["", Validators.required],
            "value": ["", Validators.pattern('[0-9]+(\\.[0-9]+)?')]
        }, { validator: this.concentrationValueValidation });
    }

    concentrationValueValidation(group: ControlGroup) {
        if (group.controls["concentration"].value == "Exact Value"
            && !group.controls["value"].value.trim())
            return { exactValueEmpty: true };
        return null;
    }

    onSubmit(value) {
        let c = new MetaboliteConcentration();
        c.name = value['name'];
        c.concentration = value['concentration'];
        c.exactValue = value['value'];
        this.conTable.push(c);
        this.form = this.createForm();
    }
}
