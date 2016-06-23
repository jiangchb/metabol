import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router, RouterLink} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {SignupService} from '../../services/signup/signup.service';
import { Http, Response, Headers} from 'angular2/http';

@Component({
    selector: 'login',
    templateUrl: '/app/components/signup/signup.html',
    styleUrls: ['app/components/signup/signup.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [SignupService],
})
export class SignupComponent {
    form: ControlGroup;

    constructor(private _signupService: SignupService, private fb: FormBuilder,
        private http: Http, private router: Router) {

        this.form = fb.group({
            "Email": ["", Validators.required],
            "Password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],
            "ConfirmPassword": ["", Validators.required]
        },
            { validator: this.matchingPasswords('Password', 'ConfirmPassword') });
    }

    //To chech whether confirmPasswor is same with Password or not
    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): { [key: string]: any } => {
            let Password = group.controls[passwordKey];
            let ConfirmPassword = group.controls[confirmPasswordKey];
            if (!ConfirmPassword)
                return { mismatchedPasswords: false };
            else if (Password.value !== ConfirmPassword.value)
                return { mismatchedPasswords: true };
        }
    }




    onSubmit(value) {
        this._signupService.onSubmit(value, (data) => {
            console.log(data);
            this.router.navigate(['Panel']);
        });
    }
}
