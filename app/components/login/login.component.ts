import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers} from 'angular2/http';
import {Authentication} from '../../services/login/login';
@Component({
    selector: 'login',
    templateUrl: '/app/components/login/login.html',
    styleUrls: ['app/components/login/login.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [Authentication],
})
export class LoginComponent {
    form: ControlGroup;
    token: string;
    error: boolean = false;

    constructor(fb: FormBuilder, public http: Http, public auth: Authentication, private router: Router) {
        this.form = fb.group({
            "Email": ["", Validators.required],
            "Password": ["", Validators.required]
        });


    }

    onSubmit(value) {
        this.auth.login(value.Email, value.Password);
    }
}
