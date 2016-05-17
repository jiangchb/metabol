import {Component, Input} from 'angular2/core';
import {MetaboliteConcentration} from '../../../services/analyze/analyze.service';
import {Control, FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {KeysPipe} from '../../../pipes/keys.pipe';
@Component({
    selector: 'concentration-table',
    templateUrl: '/app/components/analyze/concentrationTable/concentrationTable.html',
    styleUrls: ['app/components/analyze/concentrationTable/concentrationTable.css'],
    pipes: [KeysPipe]
})
export class ConcentrationTableComponent {
    @Input() conTable: Array<MetaboliteConcentration>;

    change = {
        '1': 'Increase Slightly',
        '2': 'Increase Dyramaticly',
        '-1': 'Decrease Slightly',
        '-2': 'Decrease Dyramaticly',
        '10': 'Exact Value'
    };

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
            "change": ["", Validators.required],
            "value": ["", Validators.pattern('[0-9]+(\\.[0-9]+)?')]
        }, { validator: this.concentrationValueValidation });
    }

    concentrationValueValidation(group: ControlGroup) {
        if (group.controls["change"].value == "Exact Value"
            && !group.controls["value"].value.trim())
            return { exactValueEmpty: true };
        return null;
    }

    onSubmit(value) {
        let c = new MetaboliteConcentration();
        c.name = value['name'];
        c.change = value['change'];
        c.exactValue = value['value'];
        this.conTable.push(c);
        this.form = this.createForm();
    }
}
