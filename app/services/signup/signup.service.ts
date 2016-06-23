import {Injectable} from 'angular2/core';
import {Signup} from './signup';
import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignupService {
    headers: Headers;
    apiUrl: string;
    options: any;

    constructor(private http: Http) {
        this.apiUrl = 'http://biodb.sehir.edu.tr/api2/account/Register';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = { headers: this.headers };
    }


    onSubmit(value, callback: (data) => void) {
        this.http.post(this.apiUrl, JSON.stringify(value), this.options)
            .map((res) => res.json()).subscribe(
            data => {
                callback(data);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            });
    }
}
