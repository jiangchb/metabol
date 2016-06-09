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
      "email": ["", Validators.required],
      "firstName": ["", Validators.required],
      "lastName": ["", Validators.required],
    });
  }

  onSubmit(value: string) {
    console.log(value);
  }
}
