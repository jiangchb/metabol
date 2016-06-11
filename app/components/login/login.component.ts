import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
    selector: 'login',
    templateUrl: '/app/components/login/login.html',
    styleUrls: ['app/components/login/login.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginComponent {
    form: ControlGroup;

    constructor(fb: FormBuilder, private router: Router) {
        this.form = fb.group({
            "email": ["", Validators.required],
            "password": ["", Validators.required]
        });
    }

    onSubmit(value) {
      this.router.navigate(['Panel']);
    }
}
