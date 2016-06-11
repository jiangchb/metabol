import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'login',
    templateUrl: '/app/components/signup/signup.html',
    styleUrls: ['app/components/signup/signup.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class SignupComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "email": ["", Validators.required],
            "firstName": ["", Validators.required],
            "lastName": ["", Validators.required],
            "password": ["", Validators.required],
            "status": ["", Validators.required]
        });
    }

    onSubmit(value) {
        console.log(value);
    }

}
