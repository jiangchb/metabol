import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'profile',
  templateUrl: '/app/components/panel/profile/profile.html',
  directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProfileComponent {
  form: ControlGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
        "Name": ["", Validators.required],
        "Surname": ["", Validators.required],
        "Email": ["", Validators.required],
        "Institution": ["", Validators.required],
        "ConfirmPassword": ["", Validators.required],
        "Password": ["", Validators.compose([Validators.required, Validators.minLength(6)])],

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

  onSubmit(value: string) {
    console.log(value);
  }
}
