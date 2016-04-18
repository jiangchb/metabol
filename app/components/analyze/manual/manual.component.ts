import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'manual-measurement',
    templateUrl: '/app/components/analyze/manual/manual.html',
})
export class ManualComponent {
    concenration = ['Increase Slightly', 'Increase Dyramaticly',
        'Decrease Slightly', 'Decrease Dyramaticly', 'Exact Value'];
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "name": ["", Validators.required],
            "concentration": ["", Validators.required],
            "value": [""]
        });
    }

}
